var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter, for node15
  deployer.deploy(SimpleStorage, 42, {privateFor: ["BQJStXo+ZqJglZoHJu17XWM7YH02Mvd47wB4iqTslDA="]})
};
