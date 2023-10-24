const { ethers, JsonRpcProvider } = require("ethers");

const {
  FactoryAddress,
  RouterAddress,
  FromAddress,
  ToAddress,
} = require("./AddressList");
const { erc20, factoryAbi, pairABI, routerAbi } = require("./Abiinfo");

const Provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
// console.log(Provider);
const factoryInstance = new ethers.Contract(
  FactoryAddress,
  factoryAbi,
  Provider
);
const routerInstance = new ethers.Contract(RouterAddress, routerAbi, Provider);
// console.log(routerInstance);
const priceFetch = async (humanFormat) => {
  const token1 = new ethers.Contract(FromAddress, erc20, Provider);
  const token2 = new ethers.Contract(ToAddress, erc20, Provider);
  const decimal1 = await token1.decimals();
  const decimal2 = await token2.decimals();
//   console.log(decimal2);
  const amountIn = ethers.utils.parseUnits(humanFormat,decimal1).toString();

  const amountsOut = await routerInstance.getAmountsOut(amountIn, [
    FromAddress,
    ToAddress,
  ]);
  const humanOutput = ethers.utils.formatUnits(amountsOut[1].toString(), decimal2)
  console.log(humanOutput); 
};
humanFormat = "100"
priceFetch(humanFormat);
