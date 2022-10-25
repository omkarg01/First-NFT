// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
  const nftContract = await ethers.getContractFactory("GameItem");

  // here we deploy the contract
  const deployedNftContract = await nftContract.deploy();

  // wait for the contract to deploy
  await deployedNftContract.deployed();

  // print the address of the deployed contract
  console.log("NFT Contract Address: ", firstContract.address);
}

// call the main function
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error); process.exit(1);
  });