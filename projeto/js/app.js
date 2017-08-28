var app = angular.module('target', ['ngMask','ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'views/lista.html'
	})
	.otherwise({
		redirectTo:'/'
	});
}])