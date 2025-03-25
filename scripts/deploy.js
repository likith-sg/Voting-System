const hre = require("hardhat");
async function main() {
    const VotingSystem = await hre.ethers.getContractFactory("VotingSystem");
    const votingSystem = await VotingSystem.deploy(["Pratap", "Nithin", "Mohith"]);
    await votingSystem.deployed();
    console.log(votingSystem.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
