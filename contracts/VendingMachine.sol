// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VendingMachine {
    address public owner;
    uint public initialDonutBalance;
    uint public donutPrice;
    mapping(address => uint) public donutBalances;

    event DonutPurchased(address indexed buyer, uint amountPaid, uint donutsReceived);
    event Restocked(uint amount);

    constructor(uint _initialDonutBalance, uint _donutPrice) {
        owner = msg.sender;
        initialDonutBalance = _initialDonutBalance;
        donutPrice = _donutPrice;
        donutBalances[address(this)] = _initialDonutBalance;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function getVendingMachineBalance() public view returns (uint) {
        return donutBalances[address(this)];
    }

    function purchase(uint amount) public payable {
        uint totalCost = amount * donutPrice;
        require(msg.value >= totalCost, "Insufficient funds sent");
        require(donutBalances[address(this)] >= amount, "Insufficient donuts in the vending machine");

        donutBalances[address(this)] -= amount;
        donutBalances[msg.sender] += amount;

        emit DonutPurchased(msg.sender, msg.value, amount);
    }

    function restock(uint amount) public onlyOwner {
        donutBalances[address(this)] += amount;

        emit Restocked(amount);
    }

    function withdrawFunds() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
