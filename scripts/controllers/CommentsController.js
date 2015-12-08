app.controller('CommentsController',
	['$scope', 'comments', '$routeParams' function($scope, comments, $routeParams){
		CommentsController.success(function(data){
			$scope.detail = data[$routeParams.id];
		});
}]);