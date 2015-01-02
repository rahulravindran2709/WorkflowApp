jobfwModule.controller('AccordionController', ['$scope','$document', function($scope,$document){

//Initialise the form data model

function JobRequirement(){
  this.jobdescblock={profile:""};
  this.candidatereqblock;
  this.interviewBlock;
  this.sharingDetailsBlock;
};
$scope.jobRequirement= new JobRequirement();
  //Add dom ready event listenere and initialise parsley 
	$document.ready(function (){
	$('#jobform').parsley({ errorClass: 'has-error',successClass: 'has-success',classHandler: function(el) {
        return el.$element.closest(".form-group");
    }, errorsWrapper: "<span class='help-block'></span>",errorTemplate: "<span></span>"});
  //Initialise the collapse toggle for first step
  $('#section1').collapse({ parent:"#accordion1",toggle:true});
  $('[class^="panel-heading"][href="#section1"]').bind('click',function(e){$('#section1').collapse('show')});
  });
	
	$scope.sections=[{heading:'JOB DESCRIPTION',partial:'partials/jobdescription.html',isValid:'notValidated'},
{heading:'CANDIDATE REQUIREMENTS',partial:'partials/candidaterequirements.html',isValid:'notValidated'},
{heading:'INTERVIEW PROCESS',partial:'partials/interviewprocess.html',isValid:'notValidated'},{heading:'SHARING DETAILS',partial:'partials/sharingdetails.html',isValid:'notValidated'}];
//Attach watch to all four block model objects


}]);