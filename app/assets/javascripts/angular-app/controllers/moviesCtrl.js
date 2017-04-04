function moviesCtrl($scope, $http){
	var mv = this
	this.thing = "Testing"
	this.movies = []
	$http.get('/movies.json').then(function(data){
		// getting movie data here:
		mv.movies = data.data
		console.log(data)
	})

}


angular 
	.module('app')
	.controller('moviesCtrl', moviesCtrl)