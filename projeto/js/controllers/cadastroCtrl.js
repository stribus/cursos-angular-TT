var app = angular.module('target');

app.controller('CadastroCtrl', ['apiFuncionarios', '$rootScope', '$location','$routeParams', 
        function (apiFuncionarios, $rootScope, $location,$routeParams) {
    var self = this;
    self.funcionarios = [];
    self.usuarioLogado = false;
    var id=$routeParams.id;
    if(id){
        apiFuncionarios.buscaFuncionario(id).then((resposta)=>{
            self.funcionario = resposta.data;
            self.funcionario.edicao = true;

        })
    }


    self.salvarFuncionario = function () {
        if (self.funcionario.edicao) {

             var funcionario = angular.copy(self.funcionario);

             apiFuncionarios.atualizarFuncionario(funcionario)
                .then(() => {$location.path('lista')});
         } else {
            var novo = angular.copy(self.funcionario);

            apiFuncionarios.criarFuncionario(novo).then(function (resposta) {
                $location.path('lista')
            });
        }
        self.novoFuncionario = {};
    };



    self.cancelarEdicao = function () {
        self.novoFuncionario = {};
    };
}])