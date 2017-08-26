var app = angular.module('target')
app.factory('apiFuncionarios', ['$http', function($http){
	var url = 'https://api-yuixltpbqa.now.sh'
	return {
		buscatodos: function () {
			return $http.get(url+'/funcionarios')
		},
		criarFuncionario:function (funcionario) {
			return $http.post(url+'/funcionarios',funcionario);
			
		},
		atualizarFuncionario:function (funcionario) {
			return $http.put(url+'/funcionarios',funcionario);
			
		},

		removerFuncionario: function (id) {
			return $http.delete(url+'/funcionarios/'+id);
			
		}
	};
}])