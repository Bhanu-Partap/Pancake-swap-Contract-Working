const erc20 = ["function decimals() public view returns (uint8)"]
// Return the address of Liquidity Pool Contract 
const factoryAbi =["function getPair(address tokenA, address tokenB) external view returns (address pair)"]
const pairABI=["function token0() external view returns (address)","function token1() external view returns (address)", "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)"]
const routerAbi = ["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"]

module.exports ={
    erc20, factoryAbi, pairABI, routerAbi
}