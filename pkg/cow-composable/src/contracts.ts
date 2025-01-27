import { providers } from 'ethers'
import { COMPOSABLE_COW_CONTRACT_ADDRESS, SupportedChainId } from '@cowprotocol/common'
import { ComposableCoW, ComposableCoW__factory } from '@cowprotocol/sdk-ethers-v5'
import { ComposableCoWInterface } from '@cowprotocol/sdk-ethers-v5/__generated__/ComposableCoW'

let composableCowInterfaceCache: ComposableCoWInterface | undefined
let composableCowContractCache: ComposableCoW | undefined

export function getComposableCowInterface(): ComposableCoWInterface {
  if (!composableCowInterfaceCache) {
    composableCowInterfaceCache = ComposableCoW__factory.createInterface()
  }

  return composableCowInterfaceCache
}

export function getComposableCow(chain: SupportedChainId, provider: providers.Provider): ComposableCoW {
  if (!composableCowContractCache) {
    composableCowContractCache = ComposableCoW__factory.connect(COMPOSABLE_COW_CONTRACT_ADDRESS[chain], provider)
  }

  return composableCowContractCache
}
