const ethers = require("ethers")
const {
    FactoryAddress,
    RouterAddress,
    FromAddress,
    ToAddress
}= require("./AddressList")
const {
    erc20, factoryAbi, pairABI, routerAbi
}= require("./Abiinfo")

const Provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/")
const factoryInstance = new ethers.Contract(FactoryAddress, factoryAbi, Provider )