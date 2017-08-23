angular.module('target').directive('tabs', function () {

	return {

		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		transclude: true,
		templateUrl: 'js/diretivas/tabs/tabs.html'

	};
});