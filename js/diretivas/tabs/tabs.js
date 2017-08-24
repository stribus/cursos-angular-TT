angular.module('target').directive('tabs', function () {

	return {

		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		transclude: true,
		templateUrl: 'js/diretivas/tabs/tabs.html',
		bindToController:true,
		controllerAs:'tabs',
		controller: function(){
			var self = this;
			self.tabs = [];
			self.adicionaTab = function(tab){
				self.tabs.push(tab);
				if(self.tabs.length === 1){
					tab.ativa = true;
				}
			};
			self.selecionaTab = function(tab){
				angular.forEach(self.tabs, function(t){
					t.ativa = false;
				});
				tab.ativa = true;
			};
		}
	};
});