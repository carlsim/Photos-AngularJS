var galleryApp = angular.module('galleryApp', [
	'ngRoute',
	'galleryControllers'
	]);

galleryApp.config(['$routeProvider', 
	function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'GalleryListCtrl',
		templateUrl: 'views/home.html'
	})
	.when('/photos/:photoId',{
		controller: 'GalleryDetailCtrl',
		templateUrl: 'views/photoview.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);