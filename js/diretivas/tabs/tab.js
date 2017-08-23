angular.module('target').directive('tab', function () {

	return {

		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		transclude: true,
		templateUrl: 'js/diretivas/tabs/tab.html',
		bindToController:true,
		controllerAs:'tabs',
		controller: function(){
			var self = this;
			self.tabs = [];
			
		}
	};
});