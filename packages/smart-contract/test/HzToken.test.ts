import { expect } from "chai";
import { ethers } from "hardhat";
import { HzToken } from "../typechain-types";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("HzToken", function() {

  let hzToken: HzToken;
  let owner: HardhatEthersSigner;
  let addr1: HardhatEthersSigner;
  let addr2: HardhatEthersSigner;
  before(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    const HzTokenFactory = await ethers.getContractFactory("HzToken");
    hzToken = (await HzTokenFactory.deploy(100000)) as HzToken;
    await hzToken.waitForDeployment();
  });

  describe("Deployment", function() {
    it("Should have the right name and symbol", async function() {
      expect(await hzToken.name()).to.equal("HzToken");
      expect(await hzToken.symbol()).to.equal("HZ");
    });

    it("Should mint to the owner", async () => {
      const bal = await hzToken.balanceOf(await owner.getAddress());
      expect(await hzToken.totalSupply()).to.equal(bal);
    })
  });

  describe("Transactions", function() {
    it("Should transfer tokens between accounts", async () => {
      await hzToken.transfer(await addr1.getAddress(), 50);
      const bal = await hzToken.balanceOf(await addr1.getAddress());

      expect(bal).to.equal(50);

      await hzToken.connect(addr1).transfer(await addr2.getAddress(), 50);
      const bal2 = await hzToken.balanceOf(await addr2.getAddress());

      expect(bal2).to.equal(50);
    })
  });
});
