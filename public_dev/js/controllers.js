'use strict';

/* Controllers */

angular.module('Portfolio.controllers', [])
    //Page specific Controllers
    .controller('HomeCtrl',['$rootScope', '$scope', '$state', '$stateParams', '$timeout', function ($rootScope, $scope, $state, $stateParams, $timeout) {
        $scope.isWorkState  = false;
        $scope.isAboutState = false;

        //Make sure on history back from child state the layout variables are updated
        $rootScope.$on('$stateChangeSuccess',
            function(event, toState){
                if (toState.name == 'home') {
                    $scope.isWorkState  = false;
                    $scope.isAboutState = false;
                } else if (toState.name == 'home.about') {
                    $timeout(function() {
                        console.log('asdasd');
                        $scope.$broadcast('rebuild:scrollbar');
                    }, 600);
                }
            }
        );
    }])
    .controller('AboutCtrl',['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
        console.log('About');
        $scope.$parent.isWorkState = false;
        $scope.$parent.isAboutState = true;

        //$scope.$broadcast('rebuild:scrollbar');

        $timeout(function() {
            //$scope.$parent.$broadcast('rebuild:scrollbar');
        }, 600);

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