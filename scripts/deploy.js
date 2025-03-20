const hre = require("hardhat");

//0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();
  await crowdFunding.waitForDeployment();

  console.log("CrowdFunding deployed to:", await crowdFunding.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
