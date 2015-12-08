app.factory('CommentsService', ['$http', function($http){
	return $http.get('/CommentsService.js')
	.success(function(data){
		return data
	)}
	.error(function(data){
		return data;
	)};
}]);