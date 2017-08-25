var app = angular.module('target');
app.controller('ListaCtrl', ['apiFuncionarios',function(apiFuncionarios){
	var self = this;
	//self.funcionarios = [];
	atualizalista()
	
	function atualizalista() {
		apiFuncionarios.buscatodos().then(function(resposta){
			self.funcionarios = resposta.data;
		}).catch(function(error){

		});
	}
	self.salvarFuncionario = function(){
		if (self.novoFuncionario.edicao) {
			var func = angular.copy(self.novoFuncionario)
			apiFuncionarios.atualizarFuncionario(func).then(function () {
				atualizalista();
			})
		} else {
			var novo = angular.copy(self.novoFuncionario)
			apiFuncionarios.criarFuncionario(novo).then(function(resposta) {
				self.funcionarios.push(resposta.data);	
			})
			 
			
		}
			self.novoFuncionario = {};
	}
	self.removerFuncionario = function(id){
		apiFuncionarios.removerFuncionario(id).then(function (resp) {
			atualizalista();
		});
		
	}

	self.removerSelecionados = function(){
		self.funcionarios = self.funcionarios.filter(function(funcionario){			
			return !funcionario.selecionado;
		})
		
	}

	self.editarFuncionario = function(posicao,func){
		self.novoFuncionario = angular.copy(func);
		self.novoFuncionario.edicao = true;

	}

	self.cancelarEdicao = function(){
			self.novoFuncionario = {};	
	}

	$rootScope.$on('usuarioLogado', function(e,value){
		self.usuarioLogado = value;
	});

}])