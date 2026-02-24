# Changelog

## [2.0.0](https://github.com/bleu/cow-sdk/compare/sdk-contracts-ts-v1.6.1...sdk-contracts-ts-v2.0.0) (2026-02-24)


### ⚠ BREAKING CHANGES

* **bridge:** split swap and bridge slippages ([#750](https://github.com/bleu/cow-sdk/issues/750))
* release cow-sdk v7 ([#514](https://github.com/bleu/cow-sdk/issues/514))

### ✨ Features

* add contracts-ts package ([780a60f](https://github.com/bleu/cow-sdk/commit/780a60f58bc67b27f161b0abab1f8ef81b2ea64b))
* add contracts-ts package ([af47c0c](https://github.com/bleu/cow-sdk/commit/af47c0cbe1ff93378decdcd4813645a5aeb67288))
* add migration guide and wagmi example ([#498](https://github.com/bleu/cow-sdk/issues/498)) ([21be05d](https://github.com/bleu/cow-sdk/commit/21be05d5b6472de26120ebefe4626341af9a062d))
* add tests for contracts-ts ([4f39d4d](https://github.com/bleu/cow-sdk/commit/4f39d4d37bf2f67a2686ac6709795c01f4a43ad0))
* add tests for contracts-ts ([9d6a4b8](https://github.com/bleu/cow-sdk/commit/9d6a4b8d3eeaf7a62312f3d1747df3528fd7fbe4))
* allow new code property in referrer schema ([#774](https://github.com/bleu/cow-sdk/issues/774)) ([2b648b6](https://github.com/bleu/cow-sdk/commit/2b648b6a1db03fd34002c49572d8e8e556d03593))
* **bridge:** add a flag to control intermediate=sell token ([#777](https://github.com/bleu/cow-sdk/issues/777)) ([588dffa](https://github.com/bleu/cow-sdk/commit/588dffaf418b8220293fe803186e3801597282d0))
* **bridge:** add quote id and signature metadata ([#701](https://github.com/bleu/cow-sdk/issues/701)) ([35a25a7](https://github.com/bleu/cow-sdk/commit/35a25a7fcc2724073355b3dba4b8f6d3b7419032))
* **bridge:** allow sell token as intermediate token ([#768](https://github.com/bleu/cow-sdk/issues/768)) ([8c367ac](https://github.com/bleu/cow-sdk/commit/8c367ac704ad10003618c8916e32529c5c9eb815))
* **bridge:** determine intermediate token ([#738](https://github.com/bleu/cow-sdk/issues/738)) ([381e885](https://github.com/bleu/cow-sdk/commit/381e885d398623cfd731b439e7e62e8b863736c8))
* **bridge:** make multi-quote method progressive ([#526](https://github.com/bleu/cow-sdk/issues/526)) ([27536c6](https://github.com/bleu/cow-sdk/commit/27536c63ec91a26323ffb341c1edbef0ab9331a3))
* **bridge:** split swap and bridge slippages ([#750](https://github.com/bleu/cow-sdk/issues/750)) ([3ae7b57](https://github.com/bleu/cow-sdk/commit/3ae7b574d1215ae598ec0a519ec003a9f21b7a7f))
* **bridge:** support Near bridge provider ([#642](https://github.com/bleu/cow-sdk/issues/642)) ([c7d8633](https://github.com/bleu/cow-sdk/commit/c7d86335601cfd772d72dfe65a0e941ce916769a))
* **cow-shed:** refact on common and contract-ts ([4be05aa](https://github.com/bleu/cow-sdk/commit/4be05aa7a376fbc7d2ed5b2d2b6b68e3630b9c59))
* **cow-shed:** validate EIP1271 signature ([#508](https://github.com/bleu/cow-sdk/issues/508)) ([5c72123](https://github.com/bleu/cow-sdk/commit/5c7212323edcea3eadf70973f765619afb1bcaf4))
* **deprecated-chains:** add isDeprecated flag and mark Lens as such ([#801](https://github.com/bleu/cow-sdk/issues/801)) ([e0663c6](https://github.com/bleu/cow-sdk/commit/e0663c69c0b5d92bae45570f27105d6cfd04b96a))
* **flash-loans:** support Mainnet, Gnosis, and Base for AAVE ([#657](https://github.com/bleu/cow-sdk/issues/657)) ([c7f2327](https://github.com/bleu/cow-sdk/commit/c7f2327f4672a899c2775dd8ab8d3543ad08cdd6))
* **ink:** reapply "feat/COW-163: Add Ink network ([#781](https://github.com/bleu/cow-sdk/issues/781))" ([7c23332](https://github.com/bleu/cow-sdk/commit/7c23332dac4f8c91d5f75ae68297906e20f20362))
* **lib-agnostic:** migrate latest SDK changes ([#427](https://github.com/bleu/cow-sdk/issues/427)) ([323bab6](https://github.com/bleu/cow-sdk/commit/323bab61eb5adeb4a58bc15e25ffb29d2e1afcbf))
* **monorepo-config:** adjust all package.json and scripts ([23dc2a5](https://github.com/bleu/cow-sdk/commit/23dc2a5db02ce3734b55e1151c8579f9a42a4bc5))
* move address utils ([#795](https://github.com/bleu/cow-sdk/issues/795)) ([d18212c](https://github.com/bleu/cow-sdk/commit/d18212c868ca2c16525a530f7914c9440f147414))
* refactor contracts-ts ([2e14272](https://github.com/bleu/cow-sdk/commit/2e14272f1a24a232aef584611924055ed657d16c))
* refactor contracts-ts ([b441360](https://github.com/bleu/cow-sdk/commit/b4413600d4a0753e9f608e6a6415e64762a53d3e))
* release cow-sdk v7 ([#514](https://github.com/bleu/cow-sdk/issues/514)) ([01ebd43](https://github.com/bleu/cow-sdk/commit/01ebd437bd0d54d601a3f00f3ebd2bffd58f7a93))
* **sdk-agnostic-lib:** Add composable package ([bf3f864](https://github.com/bleu/cow-sdk/commit/bf3f864815326813bbb18d2d98d10345d9aa6a2b))
* **sdk-agnostic-lib:** create cow trading package ([#368](https://github.com/bleu/cow-sdk/issues/368)) ([0a4534a](https://github.com/bleu/cow-sdk/commit/0a4534aababce4f5d8bab991cd6ae9f51842d719))
* **sdk-agnostic-lib:** Create weiroll package ([#371](https://github.com/bleu/cow-sdk/issues/371)) ([8f6a2e1](https://github.com/bleu/cow-sdk/commit/8f6a2e16e5e7a43a5afc43cf5faab174be916b2e))
* simplify OrderSigningUtils to use static methods only ([#417](https://github.com/bleu/cow-sdk/issues/417)) ([899ca43](https://github.com/bleu/cow-sdk/commit/899ca4325be831b6711468d1df3733d98fe913b0))
* **trading:** add validTo parameter to getQuote ([#576](https://github.com/bleu/cow-sdk/issues/576)) ([fcf4258](https://github.com/bleu/cow-sdk/commit/fcf425806044c0ea8b83cfb4116d2f7fb9fcc6e0))
* **trading:** use suggested slippage from BFF ([#546](https://github.com/bleu/cow-sdk/issues/546)) ([b6a59c7](https://github.com/bleu/cow-sdk/commit/b6a59c780fbfb0f2e840276fe905b2efd810805c))


### 🐛 Bug Fixes

* add optional apiKey for NearIntentsBridgeProvider ([#775](https://github.com/bleu/cow-sdk/issues/775)) ([7546a4c](https://github.com/bleu/cow-sdk/commit/7546a4c75fe43b5ee8381a45eb6608d5e8593436))
* **app-data:** fix typos and ids in schemas ([#586](https://github.com/bleu/cow-sdk/issues/586)) ([5a4461a](https://github.com/bleu/cow-sdk/commit/5a4461a2a171689db04f7c805c9e2c835bbd36dd))
* avoid using adapter in normalizeOrder ([#523](https://github.com/bleu/cow-sdk/issues/523)) ([7c196c3](https://github.com/bleu/cow-sdk/commit/7c196c39a6694924cbec09f159dd237da39d73a2))
* **bridge:** fix applying affiliate header ([#492](https://github.com/bleu/cow-sdk/issues/492)) ([e4f49c6](https://github.com/bleu/cow-sdk/commit/e4f49c64e60f4aeac97b6b246c36090946df6fcf))
* **bridge:** multi-quote strategies should not swallow BridgeProviderQuoteError ([#533](https://github.com/bleu/cow-sdk/issues/533)) ([7789699](https://github.com/bleu/cow-sdk/commit/77896999aa2140b70cd2919ede279eb7ebcf0b7b))
* flashloan fee calculation now matches aave's ([#622](https://github.com/bleu/cow-sdk/issues/622)) ([8d11b7f](https://github.com/bleu/cow-sdk/commit/8d11b7fbbc8ff797253f26772a0e5c940286f2d9))
* improve unknown/any types ([#443](https://github.com/bleu/cow-sdk/issues/443)) ([e6b8a40](https://github.com/bleu/cow-sdk/commit/e6b8a40578583cf6d1ecd208434782422f308ef0))
* **lib-agnostic:** add setProvider() method to adapters ([#432](https://github.com/bleu/cow-sdk/issues/432)) ([64c0ea9](https://github.com/bleu/cow-sdk/commit/64c0ea94d802aa167b978ae0859353d801de0911))
* **networks:** remove deprecated network check/error from trading sdk ([#804](https://github.com/bleu/cow-sdk/issues/804)) ([210d26e](https://github.com/bleu/cow-sdk/commit/210d26e556fd79c8a3ac7b8f45f33e766ade4e18))
* rename ether to ethers ([#504](https://github.com/bleu/cow-sdk/issues/504)) ([eaf2705](https://github.com/bleu/cow-sdk/commit/eaf2705f269352d3bc2908eb3335ff56ef426823))
* support decimals in protocolFeeBps ([#787](https://github.com/bleu/cow-sdk/issues/787)) ([f53ae65](https://github.com/bleu/cow-sdk/commit/f53ae65931d85e354779767ed67e0e4df944a2bc))
* **trading:** add EIP1271 signature support ([#584](https://github.com/bleu/cow-sdk/issues/584)) ([ca9e834](https://github.com/bleu/cow-sdk/commit/ca9e834e2b0edf8a757e01383b2218d5ecfbe25e))


### 📚 Documentation

* update README to focus on main use cases ([#493](https://github.com/bleu/cow-sdk/issues/493)) ([a05cb1b](https://github.com/bleu/cow-sdk/commit/a05cb1ba11b5f9895d7cfe6262cf74c4089fd73c))


### 🔧 Miscellaneous

* apply PR suggestions ([2ff0f7c](https://github.com/bleu/cow-sdk/commit/2ff0f7c74c377b67824da3ba6390edccdaad94f5))
* bump sdk beta version ([#473](https://github.com/bleu/cow-sdk/issues/473)) ([00142d3](https://github.com/bleu/cow-sdk/commit/00142d3e524ebf7a023814ba91ee3a66ed796444))
* fix merge ([5c511de](https://github.com/bleu/cow-sdk/commit/5c511deedd0c7821df6affefc9623c79a68c96c7))
* **lint:** lint ([881e345](https://github.com/bleu/cow-sdk/commit/881e3451add9d911047daebe4e36fe777d95927a))
* merge main 28-06-2025 ([#452](https://github.com/bleu/cow-sdk/issues/452)) ([4c198ce](https://github.com/bleu/cow-sdk/commit/4c198ce34890740bf0a0fe859620a9e1ad432bed))
* release main ([#453](https://github.com/bleu/cow-sdk/issues/453)) ([36080c1](https://github.com/bleu/cow-sdk/commit/36080c1955f5f161bebce7867af110f6938e5c95))
* release main ([#467](https://github.com/bleu/cow-sdk/issues/467)) ([ed2977a](https://github.com/bleu/cow-sdk/commit/ed2977a82bb2f4b43de900840848e33532d001f0))
* release main ([#474](https://github.com/bleu/cow-sdk/issues/474)) ([02e47a4](https://github.com/bleu/cow-sdk/commit/02e47a4af7a3d6c3d9d24aa15f30dde1b4672d7d))
* release main ([#486](https://github.com/bleu/cow-sdk/issues/486)) ([cf53df2](https://github.com/bleu/cow-sdk/commit/cf53df2d0f5e96a544165547958ecc959c1948d7))
* release main ([#488](https://github.com/bleu/cow-sdk/issues/488)) ([6344fa6](https://github.com/bleu/cow-sdk/commit/6344fa619465e6f94637677823a18646f06fa7c9))
* release main ([#491](https://github.com/bleu/cow-sdk/issues/491)) ([bf28181](https://github.com/bleu/cow-sdk/commit/bf281814844e0f9b5ad1cd1f5b12f89e6bea3a5a))
* release main ([#497](https://github.com/bleu/cow-sdk/issues/497)) ([7d97945](https://github.com/bleu/cow-sdk/commit/7d979459a2febdee59f98570fbd2271c4c61d0df))
* release main ([#500](https://github.com/bleu/cow-sdk/issues/500)) ([76c5185](https://github.com/bleu/cow-sdk/commit/76c5185d4b827d185af11bef9435fbed87484b0b))
* release main ([#502](https://github.com/bleu/cow-sdk/issues/502)) ([c452d8e](https://github.com/bleu/cow-sdk/commit/c452d8e53bc0dcd79052b1877d2c48a32777093e))
* release main ([#503](https://github.com/bleu/cow-sdk/issues/503)) ([532d8eb](https://github.com/bleu/cow-sdk/commit/532d8eb2a0a0f9ec5775e566fe2507f1ccc4f961))
* release main ([#505](https://github.com/bleu/cow-sdk/issues/505)) ([0f98564](https://github.com/bleu/cow-sdk/commit/0f985640c6e6f0852505cb3ad66c07bd3f23ea7b))
* release main ([#511](https://github.com/bleu/cow-sdk/issues/511)) ([5629bb2](https://github.com/bleu/cow-sdk/commit/5629bb25f89b62e490b9819393036994688bf648))
* release main ([#515](https://github.com/bleu/cow-sdk/issues/515)) ([912e315](https://github.com/bleu/cow-sdk/commit/912e31551440ebfa61d7d2f5c846d61162559448))
* release main ([#524](https://github.com/bleu/cow-sdk/issues/524)) ([78c209b](https://github.com/bleu/cow-sdk/commit/78c209bc5feeb90007bd9043dc5be861fed2d0ac))
* release main ([#532](https://github.com/bleu/cow-sdk/issues/532)) ([762ebd8](https://github.com/bleu/cow-sdk/commit/762ebd8a17fbec8a452e62c52e8efb5cd9d3070b))
* release main ([#534](https://github.com/bleu/cow-sdk/issues/534)) ([cb65e65](https://github.com/bleu/cow-sdk/commit/cb65e653925d0ef1942428738e74046b61c0020a))
* release main ([#542](https://github.com/bleu/cow-sdk/issues/542)) ([e9f98a6](https://github.com/bleu/cow-sdk/commit/e9f98a623cf81f4a9246550999914c88eb1fca30))
* release main ([#575](https://github.com/bleu/cow-sdk/issues/575)) ([2ef068b](https://github.com/bleu/cow-sdk/commit/2ef068b851e5d114784f81ecbcd0fe3c512b7570))
* release main ([#581](https://github.com/bleu/cow-sdk/issues/581)) ([0f09262](https://github.com/bleu/cow-sdk/commit/0f0926297da8949de97379e7300a1e5301bde724))
* release main ([#605](https://github.com/bleu/cow-sdk/issues/605)) ([c9efd22](https://github.com/bleu/cow-sdk/commit/c9efd22e6c934e95cb0e88a684b3a973b7ac3cce))
* release main ([#620](https://github.com/bleu/cow-sdk/issues/620)) ([b36394a](https://github.com/bleu/cow-sdk/commit/b36394a2ba38957edb47ffc4451ea6624d66737b))
* release main ([#635](https://github.com/bleu/cow-sdk/issues/635)) ([bd5c1d9](https://github.com/bleu/cow-sdk/commit/bd5c1d998c17379b2386942a0404ad4e0e232b4c))
* release main ([#637](https://github.com/bleu/cow-sdk/issues/637)) ([6909e8d](https://github.com/bleu/cow-sdk/commit/6909e8d5e97afadc203be2293865bfb2f9338953))
* release main ([#648](https://github.com/bleu/cow-sdk/issues/648)) ([5dd3bf5](https://github.com/bleu/cow-sdk/commit/5dd3bf5659852590d5d46317bfc19c56e125ca59))
* release main ([#650](https://github.com/bleu/cow-sdk/issues/650)) ([2493612](https://github.com/bleu/cow-sdk/commit/24936120e51b0083eda408ab80b8f8ee4115e223))
* release main ([#700](https://github.com/bleu/cow-sdk/issues/700)) ([a0ce28d](https://github.com/bleu/cow-sdk/commit/a0ce28d18e51b50e947bc104228686d558861391))
* release main ([#702](https://github.com/bleu/cow-sdk/issues/702)) ([1e6b54d](https://github.com/bleu/cow-sdk/commit/1e6b54dbaef21a61c362bc2d1567d87f14d7f8a7))
* release main ([#718](https://github.com/bleu/cow-sdk/issues/718)) ([87683ec](https://github.com/bleu/cow-sdk/commit/87683ecc507e59d70a6d623faba83cda65ca44cc))
* release main ([#727](https://github.com/bleu/cow-sdk/issues/727)) ([af17e9a](https://github.com/bleu/cow-sdk/commit/af17e9a772f608c5c2751bce25549062a38702b6))
* release main ([#730](https://github.com/bleu/cow-sdk/issues/730)) ([e7e4157](https://github.com/bleu/cow-sdk/commit/e7e415700724d6cc62f1f0590dbf47d908a9a55e))
* release main ([#735](https://github.com/bleu/cow-sdk/issues/735)) ([c17655c](https://github.com/bleu/cow-sdk/commit/c17655c588a735bd12c1219317f5b290cf9d9a34))
* release main ([#741](https://github.com/bleu/cow-sdk/issues/741)) ([32fb8bb](https://github.com/bleu/cow-sdk/commit/32fb8bbe6b1172c2666f330d0d50cdc2f7c2554f))
* release main ([#742](https://github.com/bleu/cow-sdk/issues/742)) ([8c8d857](https://github.com/bleu/cow-sdk/commit/8c8d857e9c9da59b8793f2f9dfb3ca075891e6e3))
* release main ([#744](https://github.com/bleu/cow-sdk/issues/744)) ([110c279](https://github.com/bleu/cow-sdk/commit/110c279db08dd981c0bda2c6b7e8c08ea3c81325))
* release main ([#751](https://github.com/bleu/cow-sdk/issues/751)) ([885d7f7](https://github.com/bleu/cow-sdk/commit/885d7f707bf2074dfb80df6ebcf41c12515695e3))
* release main ([#772](https://github.com/bleu/cow-sdk/issues/772)) ([cd30d4f](https://github.com/bleu/cow-sdk/commit/cd30d4fe42c4b2d1bbe592026a097d6b76edd735))
* release main ([#778](https://github.com/bleu/cow-sdk/issues/778)) ([d84e4a3](https://github.com/bleu/cow-sdk/commit/d84e4a3a5d918a6ba28879a20798510eb84cbf12))
* release main ([#779](https://github.com/bleu/cow-sdk/issues/779)) ([6387df5](https://github.com/bleu/cow-sdk/commit/6387df570750f4411ad57e3aed709b4eb848557c))
* release main ([#780](https://github.com/bleu/cow-sdk/issues/780)) ([3fa1e95](https://github.com/bleu/cow-sdk/commit/3fa1e951c248fb8c72c7b7a3cd2e96470e1582df))
* release main ([#784](https://github.com/bleu/cow-sdk/issues/784)) ([8284aa4](https://github.com/bleu/cow-sdk/commit/8284aa47954ab4880b6bd87b4b09f23656b264fd))
* release main ([#788](https://github.com/bleu/cow-sdk/issues/788)) ([9d7eecb](https://github.com/bleu/cow-sdk/commit/9d7eecb86b40c15ea2c368c02213e166ea9b6cd2))
* release main ([#790](https://github.com/bleu/cow-sdk/issues/790)) ([4109197](https://github.com/bleu/cow-sdk/commit/410919754c2f07e99a92787bf7b3c503ac34c9ea))
* release main ([#794](https://github.com/bleu/cow-sdk/issues/794)) ([6f11dfd](https://github.com/bleu/cow-sdk/commit/6f11dfdca4cecee7d036fc2ae49c886832db25bf))
* release main ([#802](https://github.com/bleu/cow-sdk/issues/802)) ([5583ca4](https://github.com/bleu/cow-sdk/commit/5583ca446f498416565b79485bcaf7708f1ba224))
* release main ([#805](https://github.com/bleu/cow-sdk/issues/805)) ([adbc6a9](https://github.com/bleu/cow-sdk/commit/adbc6a98eb15b02a87215a1bd446982553219b41))
* remove console logs ([ce11a98](https://github.com/bleu/cow-sdk/commit/ce11a98a36e609e963d51b8ffce1cb1995fe090f))
* revert not published release ([5facf05](https://github.com/bleu/cow-sdk/commit/5facf05c67121404b7b5aa1e77950961b06eca81))
* revert release ([#634](https://github.com/bleu/cow-sdk/issues/634)) ([fc7bf61](https://github.com/bleu/cow-sdk/commit/fc7bf61444619d4b2c3a3dd55b7ce52c197b1878))
* revert revert Ink network ([#789](https://github.com/bleu/cow-sdk/issues/789)) ([a00dbbd](https://github.com/bleu/cow-sdk/commit/a00dbbd6a26238bcee2d4452487d16551560c59f))
* **sdk-agnostic-lib:** merge multiple PRs to avoid conflicts and speed up base branch sync ([#354](https://github.com/bleu/cow-sdk/issues/354)) ([55d3068](https://github.com/bleu/cow-sdk/commit/55d3068c52217dd2618d8c180ab4fed8c9334c72))
* update contracts-ts config ([68360fc](https://github.com/bleu/cow-sdk/commit/68360fc030cd269d13d5aee8f2e89b53c4b4fc74))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 1.0.0
    * @cowprotocol/sdk-config bumped to 1.0.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 1.0.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 1.0.0
    * @cowprotocol/sdk-viem-adapter bumped to 1.0.0

## [1.6.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.6.0...sdk-contracts-ts-v1.6.1) (2026-02-20)


### 🐛 Bug Fixes

* **networks:** remove deprecated network check/error from trading sdk ([#804](https://github.com/cowprotocol/cow-sdk/issues/804)) ([210d26e](https://github.com/cowprotocol/cow-sdk/commit/210d26e556fd79c8a3ac7b8f45f33e766ade4e18))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.6.2
    * @cowprotocol/sdk-config bumped to 0.8.1
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.8
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.8
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.8

## [1.6.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.5.0...sdk-contracts-ts-v1.6.0) (2026-02-18)


### ✨ Features

* **deprecated-chains:** add isDeprecated flag and mark Lens as such ([#801](https://github.com/cowprotocol/cow-sdk/issues/801)) ([e0663c6](https://github.com/cowprotocol/cow-sdk/commit/e0663c69c0b5d92bae45570f27105d6cfd04b96a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.6.1
    * @cowprotocol/sdk-config bumped to 0.8.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.7
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.7
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.7

## [1.5.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.4.2...sdk-contracts-ts-v1.5.0) (2026-02-05)


### ✨ Features

* move address utils ([#795](https://github.com/cowprotocol/cow-sdk/issues/795)) ([d18212c](https://github.com/cowprotocol/cow-sdk/commit/d18212c868ca2c16525a530f7914c9440f147414))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.6.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.6
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.6
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.6

## [1.4.2](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.4.1...sdk-contracts-ts-v1.4.2) (2026-02-02)


### 🔧 Miscellaneous

* revert revert Ink network ([#789](https://github.com/cowprotocol/cow-sdk/issues/789)) ([a00dbbd](https://github.com/cowprotocol/cow-sdk/commit/a00dbbd6a26238bcee2d4452487d16551560c59f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.5.4
    * @cowprotocol/sdk-config bumped to 0.7.3
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.5
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.5
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.5

## [1.4.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.4.0...sdk-contracts-ts-v1.4.1) (2026-02-02)


### 🐛 Bug Fixes

* support decimals in protocolFeeBps ([#787](https://github.com/cowprotocol/cow-sdk/issues/787)) ([f53ae65](https://github.com/cowprotocol/cow-sdk/commit/f53ae65931d85e354779767ed67e0e4df944a2bc))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.5.3
    * @cowprotocol/sdk-config bumped to 0.7.2
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.4
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.4
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.4

## [1.4.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.3.0...sdk-contracts-ts-v1.4.0) (2026-01-28)


### ✨ Features

* allow new code property in referrer schema ([#774](https://github.com/cowprotocol/cow-sdk/issues/774)) ([2b648b6](https://github.com/cowprotocol/cow-sdk/commit/2b648b6a1db03fd34002c49572d8e8e556d03593))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.5.2
    * @cowprotocol/sdk-config bumped to 0.7.1
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.3
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.3
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.3

## [1.3.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.2.0...sdk-contracts-ts-v1.3.0) (2026-01-28)


### ✨ Features

* **ink:** reapply "feat/COW-163: Add Ink network ([#781](https://github.com/cowprotocol/cow-sdk/issues/781))" ([7c23332](https://github.com/cowprotocol/cow-sdk/commit/7c23332dac4f8c91d5f75ae68297906e20f20362))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.5.1
    * @cowprotocol/sdk-config bumped to 0.7.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.2
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.2
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.2

## [1.2.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.1.1...sdk-contracts-ts-v1.2.0) (2026-01-22)


### ✨ Features

* **bridge:** add a flag to control intermediate=sell token ([#777](https://github.com/cowprotocol/cow-sdk/issues/777)) ([588dffa](https://github.com/cowprotocol/cow-sdk/commit/588dffaf418b8220293fe803186e3801597282d0))

## [1.1.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.1.0...sdk-contracts-ts-v1.1.1) (2026-01-21)


### 🐛 Bug Fixes

* add optional apiKey for NearIntentsBridgeProvider ([#775](https://github.com/cowprotocol/cow-sdk/issues/775)) ([7546a4c](https://github.com/cowprotocol/cow-sdk/commit/7546a4c75fe43b5ee8381a45eb6608d5e8593436))

## [1.1.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v1.0.0...sdk-contracts-ts-v1.1.0) (2026-01-19)


### ✨ Features

* **bridge:** allow sell token as intermediate token ([#768](https://github.com/cowprotocol/cow-sdk/issues/768)) ([8c367ac](https://github.com/cowprotocol/cow-sdk/commit/8c367ac704ad10003618c8916e32529c5c9eb815))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.5.0
    * @cowprotocol/sdk-config bumped to 0.6.3
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.1
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.1
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.1

## [1.0.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.8.1...sdk-contracts-ts-v1.0.0) (2025-12-19)


### ⚠ BREAKING CHANGES

* **bridge:** split swap and bridge slippages ([#750](https://github.com/cowprotocol/cow-sdk/issues/750))

### ✨ Features

* **bridge:** split swap and bridge slippages ([#750](https://github.com/cowprotocol/cow-sdk/issues/750)) ([3ae7b57](https://github.com/cowprotocol/cow-sdk/commit/3ae7b574d1215ae598ec0a519ec003a9f21b7a7f))

## [0.8.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.8.0...sdk-contracts-ts-v0.8.1) (2025-12-11)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-config bumped to 0.6.2

## [0.8.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.7.4...sdk-contracts-ts-v0.8.0) (2025-12-10)


### ✨ Features

* **bridge:** determine intermediate token ([#738](https://github.com/cowprotocol/cow-sdk/issues/738)) ([381e885](https://github.com/cowprotocol/cow-sdk/commit/381e885d398623cfd731b439e7e62e8b863736c8))


### 🔧 Miscellaneous

* release main ([#741](https://github.com/cowprotocol/cow-sdk/issues/741)) ([32fb8bb](https://github.com/cowprotocol/cow-sdk/commit/32fb8bbe6b1172c2666f330d0d50cdc2f7c2554f))
* revert not published release ([5facf05](https://github.com/cowprotocol/cow-sdk/commit/5facf05c67121404b7b5aa1e77950961b06eca81))

## [0.7.4](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.7.3...sdk-contracts-ts-v0.7.4) (2025-12-05)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-config bumped to 0.6.1

## [0.7.3](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.7.2...sdk-contracts-ts-v0.7.3) (2025-12-04)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-config bumped to 0.6.0

## [0.7.2](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.7.1...sdk-contracts-ts-v0.7.2) (2025-12-03)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-config bumped to 0.5.0

## [0.7.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.7.0...sdk-contracts-ts-v0.7.1) (2025-11-27)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-config bumped to 0.4.1

## [0.7.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.6.0...sdk-contracts-ts-v0.7.0) (2025-11-24)


### ✨ Features

* **bridge:** add quote id and signature metadata ([#701](https://github.com/cowprotocol/cow-sdk/issues/701)) ([35a25a7](https://github.com/cowprotocol/cow-sdk/commit/35a25a7fcc2724073355b3dba4b8f6d3b7419032))

## [0.6.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.5.0...sdk-contracts-ts-v0.6.0) (2025-11-24)


### ✨ Features

* **bridge:** support Near bridge provider ([#642](https://github.com/cowprotocol/cow-sdk/issues/642)) ([c7d8633](https://github.com/cowprotocol/cow-sdk/commit/c7d86335601cfd772d72dfe65a0e941ce916769a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.4.0
    * @cowprotocol/sdk-config bumped to 0.4.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.0
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.0

## [0.5.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.4.4...sdk-contracts-ts-v0.5.0) (2025-11-07)


### ✨ Features

* **flash-loans:** support Mainnet, Gnosis, and Base for AAVE ([#657](https://github.com/cowprotocol/cow-sdk/issues/657)) ([c7f2327](https://github.com/cowprotocol/cow-sdk/commit/c7f2327f4672a899c2775dd8ab8d3543ad08cdd6))

## [0.4.4](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.4.3...sdk-contracts-ts-v0.4.4) (2025-11-05)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-config bumped to 0.3.0

## [0.4.3](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.4.2...sdk-contracts-ts-v0.4.3) (2025-10-30)


### 🐛 Bug Fixes

* flashloan fee calculation now matches aave's ([#622](https://github.com/cowprotocol/cow-sdk/issues/622)) ([8d11b7f](https://github.com/cowprotocol/cow-sdk/commit/8d11b7fbbc8ff797253f26772a0e5c940286f2d9))

## [0.4.2](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.4.1...sdk-contracts-ts-v0.4.2) (2025-10-29)


### 🔧 Miscellaneous

* release main ([#620](https://github.com/cowprotocol/cow-sdk/issues/620)) ([b36394a](https://github.com/cowprotocol/cow-sdk/commit/b36394a2ba38957edb47ffc4451ea6624d66737b))
* revert release ([#634](https://github.com/cowprotocol/cow-sdk/issues/634)) ([fc7bf61](https://github.com/cowprotocol/cow-sdk/commit/fc7bf61444619d4b2c3a3dd55b7ce52c197b1878))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.3.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.2.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.2.0
    * @cowprotocol/sdk-viem-adapter bumped to 0.2.0

## [0.4.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.4.0...sdk-contracts-ts-v0.4.1) (2025-10-24)


### 🐛 Bug Fixes

* **trading:** add EIP1271 signature support ([#584](https://github.com/cowprotocol/cow-sdk/issues/584)) ([ca9e834](https://github.com/cowprotocol/cow-sdk/commit/ca9e834e2b0edf8a757e01383b2218d5ecfbe25e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.2.2
    * @cowprotocol/sdk-config bumped to 0.2.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.1.3
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.1.3
    * @cowprotocol/sdk-viem-adapter bumped to 0.1.3

## [0.4.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.3.1...sdk-contracts-ts-v0.4.0) (2025-10-15)


### ✨ Features

* **trading:** add validTo parameter to getQuote ([#576](https://github.com/cowprotocol/cow-sdk/issues/576)) ([fcf4258](https://github.com/cowprotocol/cow-sdk/commit/fcf425806044c0ea8b83cfb4116d2f7fb9fcc6e0))


### 🐛 Bug Fixes

* **app-data:** fix typos and ids in schemas ([#586](https://github.com/cowprotocol/cow-sdk/issues/586)) ([5a4461a](https://github.com/cowprotocol/cow-sdk/commit/5a4461a2a171689db04f7c805c9e2c835bbd36dd))

## [0.3.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.3.0...sdk-contracts-ts-v0.3.1) (2025-10-08)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.2.1
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.1.2
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.1.2
    * @cowprotocol/sdk-viem-adapter bumped to 0.1.2

## [0.3.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.2.1...sdk-contracts-ts-v0.3.0) (2025-10-06)


### ✨ Features

* **trading:** use suggested slippage from BFF ([#546](https://github.com/cowprotocol/cow-sdk/issues/546)) ([b6a59c7](https://github.com/cowprotocol/cow-sdk/commit/b6a59c780fbfb0f2e840276fe905b2efd810805c))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.2.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.1.1
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.1.1
    * @cowprotocol/sdk-viem-adapter bumped to 0.1.1

## [0.2.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.2.0...sdk-contracts-ts-v0.2.1) (2025-09-24)


### 🐛 Bug Fixes

* **bridge:** multi-quote strategies should not swallow BridgeProviderQuoteError ([#533](https://github.com/cowprotocol/cow-sdk/issues/533)) ([7789699](https://github.com/cowprotocol/cow-sdk/commit/77896999aa2140b70cd2919ede279eb7ebcf0b7b))

## [0.2.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.1.1...sdk-contracts-ts-v0.2.0) (2025-09-23)


### ✨ Features

* **bridge:** make multi-quote method progressive ([#526](https://github.com/cowprotocol/cow-sdk/issues/526)) ([27536c6](https://github.com/cowprotocol/cow-sdk/commit/27536c63ec91a26323ffb341c1edbef0ab9331a3))

## [0.1.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v0.1.0...sdk-contracts-ts-v0.1.1) (2025-09-22)


### 🐛 Bug Fixes

* avoid using adapter in normalizeOrder ([#523](https://github.com/cowprotocol/cow-sdk/issues/523)) ([7c196c3](https://github.com/cowprotocol/cow-sdk/commit/7c196c39a6694924cbec09f159dd237da39d73a2))

## [0.1.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.3.0-beta.0...sdk-contracts-ts-v0.1.0) (2025-09-17)


### ⚠ BREAKING CHANGES

* release cow-sdk v7 ([#514](https://github.com/cowprotocol/cow-sdk/issues/514))

### ✨ Features

* release cow-sdk v7 ([#514](https://github.com/cowprotocol/cow-sdk/issues/514)) ([01ebd43](https://github.com/cowprotocol/cow-sdk/commit/01ebd437bd0d54d601a3f00f3ebd2bffd58f7a93))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.1.0
    * @cowprotocol/sdk-config bumped to 0.1.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.1.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.1.0
    * @cowprotocol/sdk-viem-adapter bumped to 0.1.0

## [2.3.0-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.2.1-beta.0...sdk-contracts-ts-v2.3.0-beta.0) (2025-09-17)


### ✨ Features

* **cow-shed:** validate EIP1271 signature ([#508](https://github.com/cowprotocol/cow-sdk/issues/508)) ([5c72123](https://github.com/cowprotocol/cow-sdk/commit/5c7212323edcea3eadf70973f765619afb1bcaf4))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.5.0-beta.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.2.5-beta.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.2.5-beta.0
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.1-beta.0

## [2.2.1-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.2.0-beta.0...sdk-contracts-ts-v2.2.1-beta.0) (2025-09-16)


### 🐛 Bug Fixes

* rename ether to ethers ([#504](https://github.com/cowprotocol/cow-sdk/issues/504)) ([eaf2705](https://github.com/cowprotocol/cow-sdk/commit/eaf2705f269352d3bc2908eb3335ff56ef426823))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.2.4-beta.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.2.4-beta.0

## [2.2.0-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.1.7-beta.0...sdk-contracts-ts-v2.2.0-beta.0) (2025-09-16)


### ✨ Features

* add migration guide and wagmi example ([#498](https://github.com/cowprotocol/cow-sdk/issues/498)) ([21be05d](https://github.com/cowprotocol/cow-sdk/commit/21be05d5b6472de26120ebefe4626341af9a062d))


### 📚 Documentation

* update README to focus on main use cases ([#493](https://github.com/cowprotocol/cow-sdk/issues/493)) ([a05cb1b](https://github.com/cowprotocol/cow-sdk/commit/a05cb1ba11b5f9895d7cfe6262cf74c4089fd73c))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.4.0-beta.0
    * @cowprotocol/sdk-config bumped to 0.3.3-beta.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.2.3-beta.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.2.3-beta.0
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.0-beta.0

## [2.1.7-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.1.6-beta.0...sdk-contracts-ts-v2.1.7-beta.0) (2025-09-15)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-config bumped to 0.3.2-beta.0

## [2.1.6-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.1.5-beta.0...sdk-contracts-ts-v2.1.6-beta.0) (2025-09-15)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-config bumped to 0.3.1-beta.0

## [2.1.5-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.1.4-beta.0...sdk-contracts-ts-v2.1.5-beta.0) (2025-09-15)


### 🐛 Bug Fixes

* **bridge:** fix applying affiliate header ([#492](https://github.com/cowprotocol/cow-sdk/issues/492)) ([e4f49c6](https://github.com/cowprotocol/cow-sdk/commit/e4f49c64e60f4aeac97b6b246c36090946df6fcf))

## [2.1.4-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.1.3-beta.0...sdk-contracts-ts-v2.1.4-beta.0) (2025-09-11)


### 🔧 Miscellaneous

* release main ([#488](https://github.com/cowprotocol/cow-sdk/issues/488)) ([6344fa6](https://github.com/cowprotocol/cow-sdk/commit/6344fa619465e6f94637677823a18646f06fa7c9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.3.0-beta.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.2.2-beta.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.2.2-beta.0
    * @cowprotocol/sdk-viem-adapter bumped to 0.2.2-beta.0

## [2.1.3-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.1.2-beta.0...sdk-contracts-ts-v2.1.3-beta.0) (2025-09-11)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-config bumped to 0.3.0-beta.0

## [2.1.2-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.1.1-beta.0...sdk-contracts-ts-v2.1.2-beta.0) (2025-09-04)


### 🔧 Miscellaneous

* bump sdk beta version ([#473](https://github.com/cowprotocol/cow-sdk/issues/473)) ([00142d3](https://github.com/cowprotocol/cow-sdk/commit/00142d3e524ebf7a023814ba91ee3a66ed796444))

## [2.1.1-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.1.0-beta.0...sdk-contracts-ts-v2.1.1-beta.0) (2025-09-01)


### 🐛 Bug Fixes

* improve unknown/any types ([#443](https://github.com/cowprotocol/cow-sdk/issues/443)) ([e6b8a40](https://github.com/cowprotocol/cow-sdk/commit/e6b8a40578583cf6d1ecd208434782422f308ef0))

## [2.1.0-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-contracts-ts-v2.0.0-beta.0...sdk-contracts-ts-v2.1.0-beta.0) (2025-08-28)


### ✨ Features

* add contracts-ts package ([780a60f](https://github.com/cowprotocol/cow-sdk/commit/780a60f58bc67b27f161b0abab1f8ef81b2ea64b))
* add contracts-ts package ([af47c0c](https://github.com/cowprotocol/cow-sdk/commit/af47c0cbe1ff93378decdcd4813645a5aeb67288))
* add tests for contracts-ts ([4f39d4d](https://github.com/cowprotocol/cow-sdk/commit/4f39d4d37bf2f67a2686ac6709795c01f4a43ad0))
* add tests for contracts-ts ([9d6a4b8](https://github.com/cowprotocol/cow-sdk/commit/9d6a4b8d3eeaf7a62312f3d1747df3528fd7fbe4))
* allow changing backoff and limiter per request ([#208](https://github.com/cowprotocol/cow-sdk/issues/208)) ([ebea5ca](https://github.com/cowprotocol/cow-sdk/commit/ebea5ca0858aeb89ae3e5d5407c8903c3ca5178d))
* **cow-shed:** refact on common and contract-ts ([4be05aa](https://github.com/cowprotocol/cow-sdk/commit/4be05aa7a376fbc7d2ed5b2d2b6b68e3630b9c59))
* **lib-agnostic:** migrate latest SDK changes ([#427](https://github.com/cowprotocol/cow-sdk/issues/427)) ([323bab6](https://github.com/cowprotocol/cow-sdk/commit/323bab61eb5adeb4a58bc15e25ffb29d2e1afcbf))
* **monorepo-config:** adjust all package.json and scripts ([23dc2a5](https://github.com/cowprotocol/cow-sdk/commit/23dc2a5db02ce3734b55e1151c8579f9a42a4bc5))
* refactor contracts-ts ([2e14272](https://github.com/cowprotocol/cow-sdk/commit/2e14272f1a24a232aef584611924055ed657d16c))
* refactor contracts-ts ([b441360](https://github.com/cowprotocol/cow-sdk/commit/b4413600d4a0753e9f608e6a6415e64762a53d3e))
* **sdk-agnostic-lib:** create cow trading package ([#368](https://github.com/cowprotocol/cow-sdk/issues/368)) ([0a4534a](https://github.com/cowprotocol/cow-sdk/commit/0a4534aababce4f5d8bab991cd6ae9f51842d719))
* **sdk-agnostic-lib:** Create weiroll package ([#371](https://github.com/cowprotocol/cow-sdk/issues/371)) ([8f6a2e1](https://github.com/cowprotocol/cow-sdk/commit/8f6a2e16e5e7a43a5afc43cf5faab174be916b2e))
* simplify OrderSigningUtils to use static methods only ([#417](https://github.com/cowprotocol/cow-sdk/issues/417)) ([899ca43](https://github.com/cowprotocol/cow-sdk/commit/899ca4325be831b6711468d1df3733d98fe913b0))


### 🐛 Bug Fixes

* **lib-agnostic:** add setProvider() method to adapters ([#432](https://github.com/cowprotocol/cow-sdk/issues/432)) ([64c0ea9](https://github.com/cowprotocol/cow-sdk/commit/64c0ea94d802aa167b978ae0859353d801de0911))


### 🔧 Miscellaneous

* apply PR suggestions ([2ff0f7c](https://github.com/cowprotocol/cow-sdk/commit/2ff0f7c74c377b67824da3ba6390edccdaad94f5))
* fix merge ([5c511de](https://github.com/cowprotocol/cow-sdk/commit/5c511deedd0c7821df6affefc9623c79a68c96c7))
* **lint:** lint ([881e345](https://github.com/cowprotocol/cow-sdk/commit/881e3451add9d911047daebe4e36fe777d95927a))
* merge main 28-06-2025 ([#452](https://github.com/cowprotocol/cow-sdk/issues/452)) ([4c198ce](https://github.com/cowprotocol/cow-sdk/commit/4c198ce34890740bf0a0fe859620a9e1ad432bed))
* remove console logs ([ce11a98](https://github.com/cowprotocol/cow-sdk/commit/ce11a98a36e609e963d51b8ffce1cb1995fe090f))
* **sdk-agnostic-lib:** merge multiple PRs to avoid conflicts and speed up base branch sync ([#354](https://github.com/cowprotocol/cow-sdk/issues/354)) ([55d3068](https://github.com/cowprotocol/cow-sdk/commit/55d3068c52217dd2618d8c180ab4fed8c9334c72))
* update contracts-ts config ([68360fc](https://github.com/cowprotocol/cow-sdk/commit/68360fc030cd269d13d5aee8f2e89b53c4b4fc74))
