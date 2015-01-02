$(document).ready(function () {
  /*var parsley=$('#jobform').parsley();
  //Initialise the collapse toggle for first step
  $('#section1').collapse({
    parent:"#accordion1",
    toggle:true
  });*/
  //Attach click event to header so that the next step can be collapsed and expanded at user preference
 
 //Attach a click event to the continue button at each step so that validations can happen for that block through parsley
  /*$('#accordion1').on('click','.btn-continue', function () {
    var current = $(this).data('currentBlock'),
      next = $(this).data('nextBlock');
    // only validate going forward. If current group is invalid, do not go further
    // .parsley().validate() returns validation result AND show errors
    if (next > current)
      if (false === parsley.validate('block' + current))
      {
        console.log("Failed");
        //return;
      }
        

    // validation was ok. We can go on next step.
    //Hide current workflow step
    var currentSectionElem=$('#section'+current);
    currentSectionElem.collapse('hide');

    //Enable the next workflow step and also display it
    $('#section'+next).collapse({ parent:"#accordion1",toggle:true}).collapse('show');
    //Attach click event to header so that the next step can be collapsed and expanded at user preference from now on
    $('#accordion1').on('click','[class="cursor panel-heading bg-primary"][href="#section'+next+'"]',function(e){$(this).next().collapse('toggle')});
  });*/
});