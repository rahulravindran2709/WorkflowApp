/*An attribute type directive to detect the continue button click on each validation step so that 
 *it can invoke parsley block validation on that step and toggle animate the next step in case
 * the current step is fine
*/
jobfwModule.directive('validationStep', function(){
	// Runs during compile
	return {
		 scope: { section: '=',parsleyFormInstance:'='},
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			//Attach a click event to the continue button at each step so that validations can happen for that block through parsley
			iElm.bind('click', function (e) {
                e.stopPropagation();
				var current = $(this).data('currentBlock'),
				next = $(this).data('nextBlock');
                console.log("Button"+$(this).length);
    // only validate going forward. If current group is invalid, do not go further
    // .parsley().validate() returns validation result AND show errors
    if (next > current||current==4)
    	if (false === $('#jobform').parsley().validate('block' + current))
    	{
    		console.log("Failed");
            //Mark current section as invalid so that the panel heading can show the status
    		$scope.$apply(function(){ $scope.section.isValid="false";});
    		return;
    	}


    
   // validation was ok.Update scope with validation success
    $scope.$apply(function(){ 
    	$scope.section.isValid="true";
    	});

    //Enable the next workflow step and also display it
    if(current<4)
    {

    //Hide current workflow step
     var currentSectionElem=$('#section'+current);
    currentSectionElem.collapse('hide');
    $('#section'+next).collapse({ parent:"#accordion1",toggle:true}).collapse('show');

    //Attach click event to header so that the next step can be collapsed and expanded at user preference from now on
    $('[class^="panel-heading"][href="#section'+next+'"]').bind('click',function(e){
    	$(this).next().collapse('toggle')});
    }
    //This would be the final step so we can show a success message
    else
    {
        $('.alert-success').removeClass('hidden').show();
    }
});
}
};
});