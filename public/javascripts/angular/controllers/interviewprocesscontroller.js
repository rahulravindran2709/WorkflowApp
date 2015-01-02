jobfwModule.controller('InterviewProcessController', ['$scope', function($scope){
	//Model for Interview section pane in the tab
	function InterviewDetails(title){
		this.title=title;
		this.description='';
	};
	//Model for Interview section pane in the tab
	function EvaluationDetails(){
		this.score='';
		this.evaluators = [];

	};
	//Model for a single interview tab
	function Tab(index){
		this.interviewDetails = new InterviewDetails("Interview"+index);
		this.evaluationDetails = new EvaluationDetails();
		this.isActive =false;
	};
	
	//Clicke event handler for add interview button
	$scope.addTab = function(){
		var newTab = new Tab($scope.tabs.length+1);
		console.log(newTab.interviewDetails.title);
		$scope.tabs.push(newTab);
	};
	//Basic view initialisation
	function init(){
		$scope.tabs = [];
	//Initialising scores array fro drop down
	$scope.scores =['30','40','50','60'];
		$scope.addTab();
		$scope.tabs[0].isActive=true;
	};
	init();
	//Click event handler for when user clicks on an inactive interview tab
	//Make the clicked tab content to show while previous will be hidden
	$scope.activateTab=function($index)
	{
		angular.forEach($scope.tabs,function(tab){
			tab.isActive = false;
		});
		$scope.tabs[$index].isActive=true;
	}

	
	
}]);