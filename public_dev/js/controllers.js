'use strict';

/* Controllers */

angular.module('Portfolio.controllers', [])
    //Page specific Controllers
    .controller('HomeCtrl',['$rootScope', '$scope', '$state', '$stateParams', '$timeout', function ($rootScope, $scope, $state, $stateParams, $timeout) {
        $rootScope.isWorkState  = false;
        $rootScope.isAboutState = false;

        //Make sure on history back from child state the layout variables are updated
        $rootScope.$on('$stateChangeSuccess',
            function(event, toState){
                if (toState.name == 'home') {
                    $rootScope.isWorkState  = false;
                    $rootScope.isAboutState = false;
                } else if (toState.name == 'home.about' || toState.name == 'home.work') {
                    $timeout(function() {
                        $scope.$broadcast('rebuild:scrollbar');
                    }, 600);
                }
            }
        );
    }])
    .controller('AboutCtrl',['$rootScope','$scope', '$state', function ($rootScope, $scope, $state) {
        console.log('About1');
        $rootScope.isWorkState = false;
        $rootScope.isAboutState = true;

    }])
    .controller('WorkCtrl',['$rootScope', '$scope', '$state', 'PortfolioItems', function ($rootScope, $scope, $state, PortfolioItems) {
        console.log('Work');
        $rootScope.isWorkState = true;
        $rootScope.isAboutState = false;

        $scope.portfolioItems = PortfolioItems.items;
    }])
    .controller('NotFoundController',['$scope', '$state', function ($scope, $state) {
        console.log('NotFound');
    }])
;