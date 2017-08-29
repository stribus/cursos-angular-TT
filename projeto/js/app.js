var app = angular.module('target', ['ngMask', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	//$locationProvider.html5Mode(true); pra remover o # dos link de redirecionamento
	$routeProvider
		.when('/', {
			templateUrl: 'views/lista.html',
			controller: 'ListaCtrl',
			controllerAs: 'lista'
		})
		.when('/cadastro', {
			templateUrl: 'views/cadastro.html',
			controller: 'CadastroCtrl',
			controllerAs: 'cadastro'
		})
		.when('/lista', {
			redirectTo: '/'
		}).otherwise({
			redirectTo: '/'
		});
}])