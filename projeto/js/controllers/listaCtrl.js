var app = angular.module('target');
app.controller('ListaCtrl', [function(){
	var self = this;
	self.funcionarios = [
	{
		nome:'stribus',
		profissao: 'desenv',
		telefone:'51 987 654 321'
	},];

	self.adicionaFuncionario = function(){
		var novo = angular.copy(self.novoFuncionario)
		self.funcionarios.push(novo);
		self.novoFuncionario = {};
	}
	self.removerFuncionario = function(posicao){
		self.funcionarios.splice(posicao, 1 )
	}

	self.removerSelecionados = function(){
		self.funcionarios = self.funcionarios.filter(function(funcionario){
			
			return !funcionario.selecionado;
			

		})
		console.log(self.funcionarios)
	}

}])