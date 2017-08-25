var app = angular.module('target')
app.factory('apiFuncionarios', ['$http', function($http){
	var url = 'https://api-vnaymgyddd.now.sh'
	return {
		buscatodos: function () {
			return $http.get(url+'/funcionarios')
		},
		criarFuncionario:function (funcionario) {
			return $http.post(url+'/funcionarios',funcionario);
			
		},

		removerFuncionario: function (id) {
			return $http.delete(url+'/funcionarios/'+id);
			
		}
	};
}])