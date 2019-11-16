const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "https://rfmanufacturer.blockchain.azure.com:3200/cbkb8TY2i3TIO-NyHMiB-k6l",
      port: 3200,
      network_id: "*",
      type: "quorum"
    },
    supplychainconsort: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\sukute\\source\\repos\\Web3JsPractice\\code\\hack.env', 'utf-8'), "https://rfmanufacturer.blockchain.azure.com:3200/cbkb8TY2i3TIO-NyHMiB-k6l"),
      consortium_id: 1571810881489
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
