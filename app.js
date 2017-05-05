(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.dishesCsv = "";
  $scope.message = "";
  $scope.alertColor = "";

  $scope.getMessage = function () {


    var numOfDishes = getNumOfElements($scope.dishesCsv)

    console.log(numOfDishes)

    if (numOfDishes == 0) {
      $scope.message = "Please enter data first!"
      $scope.alertColor = "red";
    } else if (numOfDishes < 4) {
      $scope.message = "Enjoy!"
      $scope.alertColor = "green";
    } else {
      $scope.message = "Too much!"
      $scope.alertColor = "green";
    }


  };

}

function getNumOfElements (item) {
  var noSpaces = item.replace(/\s/g,'').replace(',,',',');
  if (noSpaces == "") {
    return 0
  } else {
    return (noSpaces.split(',').length)
  };

};

})();
