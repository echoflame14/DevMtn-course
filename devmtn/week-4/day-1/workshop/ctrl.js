angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.showDate = function(){
		$scope.date = moment().format("MMM Do YYYY");
		console.log($scope.date);
	};
	$scope.nextDay = function(){
		$scope.timeTillNextDay = moment().endOf("day").fromNow();
	};
});
