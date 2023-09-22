// hardhat.config.js

require("@nomicfoundation/hardhat-verify");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.ALLTHATNODE_API_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY
  }
};