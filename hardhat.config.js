require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.20",
    networks: {  
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/cSiF7G6aKU8MVd4xV0TWWfRlpr6uVEBW",
            accounts: [
                "f5f423a2dabbc116a80cd3bfe4039e1b9de2e6bb0075e33064d27f2c1651b3a8",
                "8995405de3ef883acb470da8f8ce8f66b8ab857d9c03726bb745f8afb3355fce"
            ],
        },
    },
};
