const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VotingSystem Contract", function () {
    let VotingSystem, votingSystem, deployer, voter1;

    beforeEach(async function () {
        [deployer, voter1] = await ethers.getSigners();

        VotingSystem = await ethers.getContractFactory("VotingSystem");
        votingSystem = await VotingSystem.deploy(["Pratap", "Nithin", "Mohith"]);
        await votingSystem.deployed();
    });

    it("should allow a user to vote", async function () {
        await votingSystem.connect(voter1).vote(0);

        const candidate = await votingSystem.getCandidate(0);
        expect(candidate.name).to.equal("Pratap");
        
        expect(candidate.votes.toNumber()).to.equal(1);
    });

    it("should return the correct winner", async function () {
        await votingSystem.connect(voter1).vote(1);

        const winner = await votingSystem.getWinner();
        expect(winner).to.equal("Nithin");
    });
});
