// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const horoscopeNFT  = await hre.ethers.getContractFactory("horoscopeNFT");
  const hscp = await horoscopeNFT.deploy();

  await hscp.deployed();

  //since we are testing, you should mention your own Eth wallet address
  const myAddress="0x377C86F4A304Db267a65FFa7d50827896cCA29C2";

  console.log("horoscopeNFT deployed to:", hscp.address);

  let txn = await hscp.mintNFT(myAddress, 'virgo');
  await txn.wait();

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  // 0x5FbDB2315678afecb367f032d93F642f64180aa3
  