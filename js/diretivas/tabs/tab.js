angular.module('target').directive('tab', function () {

	return {

		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		transclude: true,
		templateUrl: 'js/diretivas/tabs/tab.html',
		require: '^tabs',
		scope:{
			titulo:'@'
		},
		link: function(scope, element,attrs,tabsCtrl){
			console.log(scope);
			tabsCtrl.adicionaTab(scope);
		}
		
	};
});

//.directive('', ['', function(){
	// Runs during compile
//	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		//link: function($scope, iElm, iAttrs, controller) {
			
		//}
	//};
//}]);