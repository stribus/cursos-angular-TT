angular.module('target').directive('tab', function(){
	
	return {
		
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		 transclude:true,
		 templateUrl: 'tab.js'
	};
});