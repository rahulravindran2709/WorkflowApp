/*
 *Incomplete
 *An attribute type directive to detect the continue button click on each validation step so that 
 *it can invoke parsley block validation on that step and toggle animate the next step in case
 * the current step is fine
 */
 jobfwModule.directive('accordionTitle', function(){
 	var count=0;
 	return {
 		scope: { section: '=',index:'='},
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		 replace : true,
		 template :'<div class="col-md-4"><h4 class="panel-title">{{index}}&nbsp;{{section.heading}}</h4></div>',
		 link: function($scope, iElm, iAttrs, controller) {
		 	function changeAccordionHeader()
		 	{
		 		iElm.find("h4").html($scope.index+"&nbsp;"+$scope.section.heading);
		 	}
		//Create a watcher on the isValid scope variable
		//$scope.$watch("section.heading",changeAccordionHeader);
	}
};
});
