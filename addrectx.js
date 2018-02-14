var AddRecord = artifacts.require("AddRecord");

module.exports = function(done) {
  console.log("Getting deployed version of AddRecord...")
  AddRecord.deployed().then(function(instance) {
    console.log("Setting value to ...");
    return instance.addRec("digotatortestdb","answers","Id",54,"update",{privateFor: ["BQJStXo+ZqJglZoHJu17XWM7YH02Mvd47wB4iqTslDA="]});
  }).then(function(result) {
    console.log("Transaction:", result.tx);
    console.log("Finished!");
    done();
  }).catch(function(e) {
    console.log(e);
    done();
  });
};
