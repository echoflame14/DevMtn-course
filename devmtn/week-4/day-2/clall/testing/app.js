angular.module("app", []).directive("hello", function(){
		return{
			restrict: 'AEC',
      	replace: true,
      	templateUrl: "other.html"
		};
	});
