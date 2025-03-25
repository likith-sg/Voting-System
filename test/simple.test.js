require("@nomicfoundation/hardhat-chai-matchers/register");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VotingSystem", function () {
  let VotingSystem, votingSystem, admin, addr1, addr2;

  beforeEach(async function () {
    [admin, addr1, addr2] = await ethers.getSigners();
    VotingSystem = await ethers.getContractFactory("VotingSystem");
    votingSystem = await VotingSystem.deploy(["pratap", "nithin", "mohith"]);
    await votingSystem.deployed();
  });

  it("Should deploy with correct candidates", async function () {
    const count = await votingSystem.getCandidateCount();
    expect(count).to.equal(3);
    const candidate = await votingSystem.getCandidate(0);
    expect(candidate.name).to.equal("pratap");
  });

  it("Should allow a voter to cast a vote", async function () {
    await votingSystem.connect(addr1).vote(1);
    const candidate = await votingSystem.getCandidate(1);
    expect(candidate.votes).to.equal(1);
  });

  it("Should not allow double voting", async function () {
    await votingSystem.connect(addr1).vote(0);
    await expect(votingSystem.connect(addr1).vote(1)).to.be.revertedWith("no");
  });

  it("Should revert if voting for an invalid candidate", async function () {
    await expect(votingSystem.connect(addr1).vote(5)).to.be.revertedWith("no");
  });

  it("Should correctly identify the winner", async function () {
    await votingSystem.connect(addr1).vote(2);
    await votingSystem.connect(addr2).vote(2);
    const winner = await votingSystem.getWinner();
    expect(winner).to.equal("mohith");
  });
});
