import { Signer } from 'ethers'
import { LimitTradeParametersFromQuote, TransactionParams } from './types'
import { calculateUniqueOrderId, EthFlowOrderExistsCallback } from './calculateUniqueOrderId'
import { getOrderToSign } from './getOrderToSign'
import { type EthFlow, EthFlow__factory } from '@cowprotocol/sdk-ethers-v5'
import {
  BARN_ETH_FLOW_ADDRESSES,
  ETH_FLOW_ADDRESSES,
  SupportedChainId,
  WRAPPED_NATIVE_CURRENCIES,
} from '@cowprotocol/common'

import { CowEnv } from '@cowprotocol/config'
import { GAS_LIMIT_DEFAULT } from './consts'
import type { EthFlowOrder } from '@cowprotocol/sdk-ethers-v5/__generated__/EthFlow'
import { calculateGasMargin } from './utils'

export async function getEthFlowTransaction(
  signer: Signer,
  appDataKeccak256: string,
  _params: LimitTradeParametersFromQuote,
  networkCostsAmount = '0',
  checkEthFlowOrderExists?: EthFlowOrderExistsCallback
): Promise<{ orderId: string; transaction: TransactionParams }> {
  const chainId = (await signer.getChainId()) as SupportedChainId
  const from = await signer.getAddress()

  const params = {
    ..._params,
    sellToken: WRAPPED_NATIVE_CURRENCIES[chainId],
  }
  const { quoteId } = params

  const contract = getEthFlowContract(chainId, signer, params.env)
  const orderToSign = getOrderToSign({ from, networkCostsAmount }, params, appDataKeccak256)
  const orderId = await calculateUniqueOrderId(chainId, orderToSign, checkEthFlowOrderExists, params.env)

  const ethOrderParams: EthFlowOrder.DataStruct = {
    ...orderToSign,
    quoteId,
    appData: appDataKeccak256,
    validTo: orderToSign.validTo.toString(),
  }

  const estimatedGas = await contract.estimateGas
    .createOrder(ethOrderParams, { value: orderToSign.sellAmount })
    .then((res) => BigInt(res.toHexString()))
    .catch((error) => {
      console.error(error)

      return GAS_LIMIT_DEFAULT
    })

  const data = contract.interface.encodeFunctionData('createOrder', [ethOrderParams])

  return {
    orderId,
    transaction: {
      data,
      gas: '0x' + calculateGasMargin(estimatedGas).toString(16),
      to: contract.address,
      value: '0x' + BigInt(orderToSign.sellAmount).toString(16),
    },
  }
}

function getEthFlowContract(chainId: SupportedChainId, signer: Signer, env?: CowEnv): EthFlow {
  return EthFlow__factory.connect((env === 'staging' ? BARN_ETH_FLOW_ADDRESSES : ETH_FLOW_ADDRESSES)[chainId], signer)
}
