var app = angular.module('target');

app.controller('CadastroCtrl', ['apiFuncionarios', '$rootScope', '$location', function (apiFuncionarios, $rootScope, $location) {
    var self = this;
    self.funcionarios = [];
    self.usuarioLogado = false;


    self.salvarFuncionario = function () {
        // if (self.funcionario.edicao) {

        //     var funcionario = angular.copy(self.funcionario);

        //     apiFuncionarios.atualizarFuncionario(funcionario)
        //         .then(() => $location.path('/#/lista'));
        // } else {
        var novo = angular.copy(self.funcionario);

        apiFuncionarios.criarFuncionario(novo).then(function (resposta) {
            $location.path('/#/lista')
        });
        //}
        self.novoFuncionario = {};
    };



    self.cancelarEdicao = function () {
        self.novoFuncionario = {};
    };
}])