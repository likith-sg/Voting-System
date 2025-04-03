# Voting System

A **blockchain-based voting system** built using **Solidity, Hardhat, and JavaScript**. This decentralized system ensures a **secure and transparent** election process through **smart contracts** deployed on the Ethereum blockchain.

## Features

- **Decentralized & Transparent** – Votes are stored on the blockchain and cannot be tampered with.  
- **One-Vote Per Address** – Prevents double voting by maintaining a record of voted addresses.  
- **Candidate Listing & Voting** – Allows multiple candidates and tracks votes.  
- **Automated Winner Calculation** – The contract determines the winner based on vote count.  

---

## Technologies Used

- **Solidity** – Smart contract programming language  
- **Hardhat** – Ethereum development environment  
- **JavaScript (Node.js)** – Used for deployment and interaction  
- **MetaMask** – For Ethereum wallet integration  
- **Ethers.js** – Library for interacting with smart contracts  
- **Ethereum Testnets (Sepolia/Localhost)** – For testing and deployment  

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/likith-sg/Voting-System.git
cd Voting-System
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Compile the Smart Contract

```bash
npx hardhat compile
```

### 4. Start a Local Ethereum Network

```bash
npx hardhat node
```

This creates a **local blockchain** for development.

### 5. Deploy the Smart Contract

Open a **new terminal** and run:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

This deploys the contract and logs its **address**.

---

## How to Use

### 1. Voting on the Smart Contract

To interact with the contract, use:

```bash
npx hardhat run scripts/interact.js --network localhost
```

This script:

- **Casts a vote**  
- **Fetches the total candidate count**  
- **Displays each candidate and their vote count**  
- **Declares the winner**  

---

## Project Structure

```
Voting-System/
│-- contracts/             # Solidity smart contracts
│   ├── VotingSystem.sol   # Main contract file
│-- scripts/               # Deployment and interaction scripts
│   ├── deploy.js          # Deploys contract
│   ├── interact.js        # Casts votes and fetches results
│-- test/                  # Test cases for smart contracts
│-- hardhat.config.js      # Hardhat configuration file
│-- package.json           # Dependencies and scripts
│-- README.md              # Project documentation
```

---

## Deploying to a Testnet (Sepolia)

To deploy on **Sepolia**, update `hardhat.config.js` with your **Alchemy/Infura RPC URL** and wallet **private key**:

```javascript
networks: {
    sepolia: {
        url: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
        accounts: ["YOUR_PRIVATE_KEY"],
    },
}
```

Then deploy:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## Running Tests

To run contract tests:

```bash
npx hardhat test
```

---

This README provides **detailed setup instructions, usage, and deployment steps**. Let me know if you need any modifications.
