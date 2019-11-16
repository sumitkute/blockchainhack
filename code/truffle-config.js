const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      //type: "quorum"
    },
    abs_traiconsortium_hclmanufacturer_hclmanufacturer: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\sukute\\source\\repos\\Web3JsPractice\\code\\myblockchainmember.env', 'utf-8'), "https://hclmanufacturer.blockchain.azure.com:3200/NZQmaDK2yLz7N3mcK9u3NOBV")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.5.0"
    }
  }
};
