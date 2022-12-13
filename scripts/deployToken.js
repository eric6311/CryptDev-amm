
require('dotenv').config()

async function main() {
  const initialSupply = ethers.utils.parseEther("100000");

  const [deployer] = await ethers.getSigners();
  console.log(`Address  deploying the contract --> ${deployer.address}`);

  const tokenFactory = await ethers.getContractFactory("CryptoDevToken");
  const contract = await tokenFactory.deploy(initialSupply);

  console.log(`Toekn contract address --> ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
