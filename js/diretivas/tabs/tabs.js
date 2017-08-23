angular.module('target').directive('tabs', function(){
	
	return {
		
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		 templateUrl: 'tab.html',		 
		 transclude:true,
		link: function(scope, element, attrs) {
			
		}
	};
});