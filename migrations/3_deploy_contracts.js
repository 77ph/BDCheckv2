var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var AddRecord = artifacts.require("./AddRecord.sol");


module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(AddRecord,{privateFor: ["BQJStXo+ZqJglZoHJu17XWM7YH02Mvd47wB4iqTslDA="]});
};
