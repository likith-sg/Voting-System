const hre = require("hardhat");

async function main() {
    const deployedAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
    const [admin] = await hre.ethers.getSigners();
    const votingContract = await hre.ethers.getContractAt("VotingSystem", deployedAddress, admin);

    const candidateIndexToVote = 0;
    const voteTx = await votingContract.vote(candidateIndexToVote);
    await voteTx.wait();

    const candidateCount = await votingContract.getCandidateCount();

    for (let i = 0; i < candidateCount; i++) {
        const [name, votes] = await votingContract.getCandidate(i);
        console.log(`Candidate ${i}: ${name} - Votes: ${votes.toString()}`);
    }

    const winner = await votingContract.getWinner();
    console.log(`Winner: ${winner}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
