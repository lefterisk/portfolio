'use strict';

/* Controllers */

angular.module('Portfolio.controllers', [])
    //Page specific Controllers
    .controller('HomeCtrl',['$rootScope', '$scope', '$state', '$stateParams', function ($rootScope, $scope, $state, $stateParams) {
        $scope.isWorkState  = false;
        $scope.isAboutState = false;

        //Make sure on history back from child state the layout variables are updated
        $rootScope.$on('$stateChangeSuccess',
            function(event, toState){
                if (toState.name == 'home') {
                    $scope.isWorkState  = false;
                    $scope.isAboutState = false;
                }
            }
        );
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