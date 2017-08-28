var app = angular.module('target', ['ngMask','ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	//$locationProvider.html5Mode(true); pra remover o # dos link de redirecionamento
	$routeProvider.when('/', {
		templateUrl:'views/lista.html'
	})
	.when('/cadastro', {
		templateUrl:'views/cadastro.html'
	})
	.otherwise({
		redirectTo:'/'
	});
}])