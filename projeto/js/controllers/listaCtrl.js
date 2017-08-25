var app = angular.module('target');
app.controller('ListaCtrl', ['$http',function($http){
	var self = this;
	//self.funcionarios = [];
	$http.get('https://api-vnaymgyddd.now.sh/funcionarios')
		.then(function(resposta){
			self.funcionarios = resposta.data;
		}).catch(function(error){

		});

	self.salvarFuncionario = function(){
		if (self.novoFuncionario.edicao) {
			var func = angular.copy(self.novoFuncionario)
			self.funcionarios.splice(func.id,1,func)
		} else {
			var novo = angular.copy(self.novoFuncionario)
			self.funcionarios.push(novo);
			
		}
			self.novoFuncionario = {};
	}
	self.removerFuncionario = function(posicao){
		self.funcionarios.splice(posicao, 1 )
	}

	self.removerSelecionados = function(){
		self.funcionarios = self.funcionarios.filter(function(funcionario){			
			return !funcionario.selecionado;
		})
		
	}

	self.editarFuncionario = function(posicao,func){
		self.novoFuncionario = angular.copy(func);
		self.novoFuncionario.edicao = true;
		self.novoFuncionario.id = posicao;

	}

	self.cancelarEdicao = function(){
			self.novoFuncionario = {};	
	}

}])