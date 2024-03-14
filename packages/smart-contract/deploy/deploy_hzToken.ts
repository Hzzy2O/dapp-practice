import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployHzToken: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {

  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("HzToken", {
    from: deployer,
    args: [100000],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  const HzToken = await hre.ethers.getContract<Contract>("HzToken", deployer);
  console.log("👋 Initial name:", await HzToken.name());
};

export default deployHzToken;

deployHzToken.tags = ["HzToken"];
