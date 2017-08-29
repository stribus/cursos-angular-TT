var app = angular.module('target');

app.factory('apiFuncionarios', ['$http', function ($http) {
    var url = 'https://api-yuixltpbqa.now.sh';

    return {
        buscaTodos: function () {
            return $http.get(url + '/funcionarios');
        }, 
        buscaFuncionario: function (id) {
            return $http.get(url + '/funcionarios/'+id);
        },

        criarFuncionario: function (funcionario) {
            return $http.post(url + '/funcionarios', funcionario);
        },

        removerFuncionario: function (id) {
            return $http.delete(url + '/funcionarios/' + id);
            // return $http.delete(`${url}/funcionarios/${id}`);
        },

        atualizarFuncionario: function (funcionario) {
            return $http.put(url + '/funcionarios', funcionario);
        }
    };
}]);