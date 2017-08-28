var app = angular.module('target');

app.service('autenticacao', ['$rootScope', function ($rootScope) {
    this.entrar = function () {
        $rootScope.$broadcast('usuarioLogado', true);
    };

    this.sair = function () {
        $rootScope.$broadcast('usuarioLogado', false);
    };
}]);