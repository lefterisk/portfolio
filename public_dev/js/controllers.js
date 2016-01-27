'use strict';

/* Controllers */

angular.module('Portfolio.controllers', [])
    //Page specific Controllers
    .controller('HomeCtrl',['$rootScope', '$scope', '$state', '$stateParams', function ($rootScope, $scope, $state, $stateParams) {
        console.log($state.current.name);
        $scope.isWorkState  = false;
        $scope.isAboutState = false;

        $scope.goToState = function (childState) {
            $state.go('home.' + childState);
        };
    }])
    .controller('AboutCtrl',['$scope', '$state', function ($scope, $state) {
        console.log('About');
        $scope.$parent.isWorkState = false;
        $scope.$parent.isAboutState = true;
    }])
    .controller('WorkCtrl',['$scope', '$state', function ($scope, $state) {
        console.log('Work');
        $scope.$parent.isWorkState = true;
        $scope.$parent.isAboutState = false;
    }])
    .controller('NotFoundController',['$scope', '$state', function ($scope, $state) {
        console.log('NotFound');
    }])
;