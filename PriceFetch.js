const {ethers, JsonRpcProvider} = require("ethers")

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
const routerInstance = new ethers.Contract(RouterAddress, routerAbi, Provider )
// console.log(routerInstance);
const priceFetch = async(amount)=>{
    const token1 = new ethers.Contract(FromAddress, erc20 , Provider )
    const token2 = new ethers.Contract(ToAddress, erc20 , Provider )

    const decimal1 = await token1.decimals()
    console.log(decimal1);
}

priceFetch()