require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATEKEY = process.env.PRIVATE_KEY;
const endPoint = process.env.RPC_URL;
const etherscan_key = process.env.ETHERSCAN_API;

module.exports = {
  defaultNetworks: "hardhat",
  networks: {
    hardhat: {},

    goerli: {
      url: endPoint,
      accounts: [PRIVATEKEY],
      chainId: 5,
    },
  },

  etherscan: {
    apiKey: etherscan_key,
  },

  solidity: {
    version: "0.8.4",
  },
};
