require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATEKEY = process.env.PRIVATE_KEY;
const endPoint = process.env.RPC_URL;
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

  solidity: {
    version: "0.8.4",
  },
};
