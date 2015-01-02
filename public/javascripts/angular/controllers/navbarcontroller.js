jobfwModule.controller('NavbarController', ['$scope','$rootScope', function($scope,$rootScope){
	$scope.navbar ={partial:"partials/navbar.html"};
	$scope.isLoaded = false;
    $rootScope.$on('$includeContentLoaded', function(event) {
        $scope.isLoaded = true;
    });
}]);