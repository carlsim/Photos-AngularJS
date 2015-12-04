app.factory('photos', ['$http', function($http){
	return $http.get('https://raw.githubusercontent.com/carlsim/Photos-AngularJS/master/photos.json')
	 .success(function(data) {
           return data;
     })
     .error(function(data) {
       return data;
     });
}]);