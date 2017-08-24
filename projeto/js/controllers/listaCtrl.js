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

}])