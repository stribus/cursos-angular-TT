var app = angular.module('target')

app.controller('CabecalhoCtrl', ['autenticacao','$rootScope',function(autenticacao,$rootScope){
	var self = this;
	self.usuarioLogado = false;
	self.entrar= function () {
		autenticacao.entrar()
	}

	self.sair = function () {
		autenticacao.sair()
	}

	$rootScope.$on('usuarioLogado',function (event,value) {
		self.usuarioLogado = value;
		
	})
	
}])