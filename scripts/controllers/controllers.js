var galleryControllers = angular.module('galleryControllers',[]);

galleryControllers.controller('GalleryListCtrl', ['$scope', '$http', 
	function($scope, $http){
		$http.get('https://raw.githubusercontent.com/carlsim/Photos-AngularJS/gh-pages/photos/photos.json')
		.success(function(data){
			$scope.photos = data;
		});
	}]);

galleryControllers.controller('GalleryDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http){
		$http.get('https://raw.githubusercontent.com/carlsim/Photos-AngularJS/gh-pages/photos/' + $routeParams.photoId + '.json')
		.success(function(data){
			console.log($routeParams.photoId);
			$scope.photo = data;
		});
		$http.get('https://raw.githubusercontent.com/carlsim/Photos-AngularJS/gh-pages/photos/' + $routeParams.photoId + '.json')
		.success(function(data){
			console.log($routeParams.photoId);
			$scope.comments = data.comments;
		});
		$scope.upvotes = 10;
	}]);