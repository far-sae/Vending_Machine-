const VendingMachine = artifacts.require("VendingMachine");

module.exports = function(deployer) {
  const initialDonutBalance = 100; // Set initial donuts
  const donutPrice = web3.utils.toWei("0.01", "ether"); // Set price per donut (0.01 ETH)

  deployer.deploy(VendingMachine, initialDonutBalance, donutPrice, {
    gas: 5000000
  });
};
