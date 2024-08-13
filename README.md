
# Vending Machine Smart Contract

This repository contains a smart contract for a simple Ethereum-based vending machine, written in Solidity. The contract allows users to purchase donuts using Ether, and it includes functionality for restocking the machine and withdrawing funds by the owner.

## Features

- **Purchase Donuts**: Users can purchase donuts by sending Ether to the contract.
- **Restock Donuts**: The owner can restock the vending machine with additional donuts.
- **Withdraw Funds**: The owner can withdraw the collected Ether from the vending machine.

## Prerequisites

To interact with this project, you will need to have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Truffle](https://www.trufflesuite.com/truffle) (v5.4.29 or later)
- [Ganache](https://www.trufflesuite.com/ganache) (For local Ethereum network)
- [MetaMask](https://metamask.io/) (For interacting with the contract from the frontend)

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/far-sae/Vending_Machine.git
cd Vending_Machine
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Compile the Smart Contract

Use Truffle to compile the smart contract:

```sh
truffle compile
```

### 4. Deploy the Smart Contract

Make sure Ganache is running, then deploy the contract to the local blockchain:

```sh
truffle migrate --reset
```

### 5. Run Tests

To ensure everything is working correctly, run the provided tests:

```sh
truffle test
```

### 6. Interact with the Contract

You can interact with the deployed contract using the Truffle console:

```sh
truffle console
```

Within the Truffle console, you can execute commands such as:

```javascript
const vendingMachine = await VendingMachine.deployed();
const balance = await vendingMachine.getVendingMachineBalance();
console.log("Current Vending Machine Balance:", balance.toNumber());
```

## Project Structure

```
vending-machine/
├── contracts/                 # Solidity smart contracts
│   └── VendingMachine.sol
├── migrations/                # Deployment scripts
│   └── 2_deploy_vending_machine.js
├── test/                      # Automated tests for the smart contract
│   └── VendingMachine.test.js
├── truffle-config.js          # Truffle configuration file
└── package.json               # Node.js project metadata and dependencies
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. If you find a bug or have a feature request, please create an issue.

