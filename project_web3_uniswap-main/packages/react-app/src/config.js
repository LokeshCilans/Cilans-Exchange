import { Goerli } from "@usedapp/core";

// export const ROUTER_ADDRESS = "0x6E71cfbc04eF15db5CcB942f2e4C78efCDD02833";
export const ROUTER_ADDRESS = "0xB356af0230142b8eB42f6A2d49a9AdcbF7deEd31";


export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/VFVeT3J9yUX9SZs4FStpZUZSJyIUolda",
  },
};
