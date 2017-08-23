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
			};
		}

	};
});