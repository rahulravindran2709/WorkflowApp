jobfwModule.controller('SharingDetailsController', ['$scope', function($scope){
	//Set default values of the role and permission drop downs
	function resetRoleAndPermission()
	{
		$scope.newContributor.role='Select role';
		$scope.newContributor.permission='Select permission';
	}
	//init fn for creating an empty contributor object and listing the values of the drop downs
	function init(){
		$scope.newContributor= new Contributor();
		resetRoleAndPermission();
		$scope.sharedpeople=[]; 
		$scope.roles = ['Moderator','Contributor'];
		$scope.permissions = ['can view','can share','can edit'];
		$scope.currentRole="";
	};
	init();
	//Click event handler for the role drop down
	$scope.selectRole=function(role)
	{
		$scope.newContributor.role=role;
		console.log($scope.newContributor.role);
	}
	//Click event handler for the permission drop down
	$scope.selectPermission=function(permission)
	{
		$scope.newContributor.permission=permission;
		console.log($scope.newContributor.permission);
	}
	//Click event handler for the add contributor button
	$scope.addContributor=function(contributor)
	{
		console.log(contributor);
		$scope.sharedpeople.push(contributor);
		$scope.newContributor= {};
		resetRoleAndPermission();
	}
	//Click event handler to monitor the change of permission of a particular row in to be shared div
	$scope.updatePermission=function (permission,index)
	{
		$scope.sharedpeople[index].permission=permission;
	}
	//Click event handler to monitor the change of role of a particular row in to be shared div
	$scope.updateRoles=function (role,index)
	{
		$scope.sharedpeople[index].role=role;
	}
	//Click event handler to remove the contributor by pressing x button
	$scope.deleteContributor=function(index)
	{
		$scope.sharedpeople.splice(index,1);
	}
	//Constructor function for contributor model
	function Contributor()
	{
		this.names=[];
		this.role;
		this.permission;
	}
	
}]);