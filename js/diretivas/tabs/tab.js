angular.module('target').directive('tab', function () {

	return {

		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		transclude: true,
		templateUrl: 'js/diretivas/tabs/tab.html',
		require: '^tabs',
		link: function(scope, element,attrs,tabsCtrl){
			tabsCtrl.adicionaTab(scope);
		}
		
	};
});