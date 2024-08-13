const VendingMachine = artifacts.require("VendingMachine");
module.exports = async function(callback) {
  const vendingMachine = await VendingMachine.deployed();
};
contract("VendingMachine", (accounts) => {
  let vendingMachine;

  before(async () => {
    vendingMachine = await VendingMachine.deployed();
  });

  it("should have an initial balance of 100 donuts", async () => {
    const balance = await vendingMachine.getVendingMachineBalance();
    assert.equal(balance.toNumber(), 100, "Initial balance should be 100");
  });

  it("should allow owner to restock donuts", async () => {
    await vendingMachine.restock(50, { from: accounts[0] });
    const balance = await vendingMachine.getVendingMachineBalance();
    assert.equal(balance.toNumber(), 150, "Balance should be 150 after restocking");
  });

  it("should allow a user to purchase donuts", async () => {
    const donutPrice = await vendingMachine.donutPrice();
    await vendingMachine.purchase(2, { from: accounts[1], value: donutPrice * 2 });

    const balance = await vendingMachine.getVendingMachineBalance();
    const userBalance = await vendingMachine.donutBalances(accounts[1]);

    assert.equal(balance.toNumber(), 148, "Vending machine balance should decrease by 2");
    assert.equal(userBalance.toNumber(), 2, "User should have 2 donuts");
  });

  it("should allow the owner to withdraw funds", async () => {
    const initialOwnerBalance = await web3.eth.getBalance(accounts[0]);
    await vendingMachine.withdrawFunds({ from: accounts[0] });

    const finalOwnerBalance = await web3.eth.getBalance(accounts[0]);
    assert(finalOwnerBalance > initialOwnerBalance, "Owner balance should increase after withdrawal");
  });
});

