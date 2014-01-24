"use strict";

angular.module('myApp.routes', ['ngRoute'])

	App.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/', {	
			templateUrl: 'partials/home.html', 
			controller: 'LoginCtrl'
		}).
		when('/view1', {
			authRequired: false,		
			templateUrl: 'partials/partial1.html', 
			controller: 'MyCtrl1'
		}).
		when('/view2', {
			authRequired: true,		
			templateUrl: 'partials/partial2.html', 
			controller: 'MyCtrl2'
		}).		
		when('/account', {
			authRequired: true,
			templateUrl: 'partials/account.html', 
			controller: 'AccountCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});    
	}]).	
	run(['$rootScope', '$location', function($rootScope, $location) {
		var path = function() { return $location.path();};
		$rootScope.$watch(path, function(newVal, oldVal){
			$rootScope.activetab = newVal;
		});
	}]);