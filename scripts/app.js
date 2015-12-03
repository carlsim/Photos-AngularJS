var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'MainController',
		templateUrl: 'views/home.html'
	})
	.when('/photos/:id',{
		controller: 'PhotosController',
		templateUrl: 'views/photoview.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});