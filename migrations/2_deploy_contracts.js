var tradefinancewkflow = artifacts.require("RetailerFinance");

const pManufacturer = "0xabb79cd5f874dba57da089560c38aeb0f984a7f2"
const pRetailer= "0xabb79cd5f874dba57da089560c38aeb0f984a7f2"
const pBank = "0xabb79cd5f874dba57da089560c38aeb0f984a7f2"
const pDistributor = "0xabb79cd5f874dba57da089560c38aeb0f984a7f2"
module.exports = deployer => {
    deployer.deploy(tradefinancewkflow, pManufacturer,pRetailer,pBank,pDistributor);
};