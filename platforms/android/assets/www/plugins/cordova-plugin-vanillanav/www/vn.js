cordova.define("cordova-plugin-vanillanav.device", function(require, exports, module) {
module.exports.navigate = function(venueId, referenceId){
  var successCallback = function(){

  };
  var errorCallback = successCallback;
  cordova.exec(successCallback, errorCallback, "VanillaNav", "navigate", [venueId, referenceId]);
}

});
