'use strict';

/* Directives */

angular.module('myApp.directives', [])

	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}])
	
	.directive('appName', ['name', function(name) {
		return function(scope, elm, attrs) {
			elm.text(name);
		};
	}])

	.directive('ngFocus', [function() {
	  var FOCUS_CLASS = "ng-focused";
	  return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
		  ctrl.$focused = false;
		  element.bind('focus', function(evt) {
			element.addClass(FOCUS_CLASS);
			scope.$apply(function() {ctrl.$focused = true;});
		  }).bind('blur', function(evt) {
			element.removeClass(FOCUS_CLASS);
			scope.$apply(function() {ctrl.$focused = false;});
		  });
		}
	  }
	}]);