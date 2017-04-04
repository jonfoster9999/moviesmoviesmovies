function moviesCtrl($scope){
	$scope.thing = "Lets see"
}

angular 
	.module('app')
	.controller('moviesCtrl', moviesCtrl)