'use strict';

/* Controllers */

angular.module('Portfolio.controllers', [])
    //Page specific Controllers
    .controller('HomeCtrl',['$rootScope', '$scope', '$state', '$stateParams', function ($rootScope, $scope, $state, $stateParams) {

    }])
    .controller('NotFoundController',['$scope', '$state', function ($scope, $state) {
        console.log('NotFound');
    }])
;