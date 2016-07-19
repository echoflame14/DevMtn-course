angular.module("myApp").service("myService",function($q, $timeout, $http){
	console.log("got to service file");
	this.findUni = function(){
		console.log("looking in service.findUni");
		console.log("waiting for the deffObj to resolve");
		var deffObj = $q.defer();// making an obj to defer

		$timeout(function(){//--> relolving the deffObj
			deffObj.resolve("Sorry I couldent find any unicors");
		},1600);//--> time to wait

		return deffObj.promise;//--> tells the controller to continue and then wait for the promise
	};

	this.changeView = function(){
		console.log("view changed");
		return "view changed";
	};

});
