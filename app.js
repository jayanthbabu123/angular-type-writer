var demoapp = angular.module("demoapp", ["angular.typewriter"]);

demoapp.controller("mainCtrl", ["$scope", function($scope){

    $scope.sentences = ["Hai this is Jayanth babu somineni, Introduction to typed.js", "This is the second sentence ... ", "This is the third sentence ...", "This is the forth sentence ..." ];
console.log( $scope.sentences);
}]);
