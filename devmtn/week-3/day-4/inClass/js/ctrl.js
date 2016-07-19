angular.module("myApp").controller("landingPage", function($scope, myService){
	$scope.getIt = function(){
		var promise = myService.findUni();
			promise.then(function(result){
				console.log("promise retrieved in controller");
				$scope.uniStatus = result;
			});
	};
	$scope.changeView = function(){
		$scope.newView = myService.changeView();
	};
});
