app.controller('MainController', 
	['$scope', 'photos', function($scope, photos){
		photos.success(function(data) {
    	$scope.photos = data;
  	});
	$scope.title = 'Hello World';
}]);