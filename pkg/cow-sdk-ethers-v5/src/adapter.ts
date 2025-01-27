// import { Contract } from 'ethers'
// import { ContractCaller } from '@cowswap/base'
// import { ethers } from 'ethers'

// export class EthersV5ContractCaller implements ContractCaller {
//   constructor(private provider: ethers.providers.Provider) {}

//   async callContract({ address, data }: { address: string; data: string }) {
//     const contract = new Contract(address, [], this.provider)
//     return contract.callStatic[data]()
//   }

//   // Other implementations
// }
