// deploy.js

const hre = require("hardhat");

async function main() {
  // deploying ERC20 token
  const [owner, addr1] = await ethers.getSigners();

  const HulkToken = await hre.ethers.getContractFactory("HulkToken");
  console.log('Deploying HulkToken...');
  const token = await HulkToken.deploy();
  await token.deployed();
  console.log("Token deployed to:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
