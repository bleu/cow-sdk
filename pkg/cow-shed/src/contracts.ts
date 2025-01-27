import { CoWShed__factory, CoWShedFactory__factory } from '@cowprotocol/sdk-ethers-v5'
import { CoWShedInterface } from '@cowprotocol/sdk-ethers-v5/__generated__/CoWShed'
import { CoWShedFactoryInterface } from '@cowprotocol/sdk-ethers-v5/__generated__/CoWShedFactory'

let cowShedInterfaceCache: CoWShedInterface | undefined
let cowShedFactoryInterface: CoWShedFactoryInterface | undefined

export function getCoWShedInterface(): CoWShedInterface {
  if (!cowShedInterfaceCache) {
    cowShedInterfaceCache = CoWShed__factory.createInterface()
  }

  return cowShedInterfaceCache
}

export function getCoWShedFactoryInterface(): CoWShedFactoryInterface {
  if (!cowShedFactoryInterface) {
    cowShedFactoryInterface = CoWShedFactory__factory.createInterface()
  }

  return cowShedFactoryInterface
}
