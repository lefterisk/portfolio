'use strict';

// IE8 fix - be careful not to use console.warn() - it will cause IE8 to silently not run angular.
var console = console || {};

angular.module('Portfolio', [
    'ui.router',
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngCookies',
    'angular-loading-bar',
    //App
    'Portfolio.controllers',
    'Portfolio.services',
    'Portfolio.tpls'
])
    .config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            // All app states loaded in index.html
            .state('home', { url: '/', templateUrl: '/tpls/home.html', controller: 'HomeCtrl'
                //resolve: {
                //    UiData: function (UiData) {
                //        return UiData();
                //    }
                //}
            })
            .state('home.about', { url: 'about', template: '', controller: 'AboutCtrl'
                //resolve: {
                //    UiData: function (UiData) {
                //        return UiData();
                //    }
                //}
            })
            .state('home.work', { url: 'work', template: '', controller: 'WorkCtrl'
                //resolve: {
                //    UiData: function (UiData) {
                //        return UiData();
                //    }
                //}
            })
            .state('404', { url: '/404', templateUrl: '/tpls/404.html', controller: 'NotFoundCtrl'})
        ;

        $urlRouterProvider.otherwise(function($injector) {

            var $state = $injector.get('$state');

            $state.go('404', null, {
                location: false
            });

        });
    }])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function(obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

            for(name in obj) {
                value = obj[name];

                if(value instanceof Array) {
                    for(i=0; i<value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }

                    if (value.length == 0) {
                        query += encodeURIComponent(name) + '=' + '&';
                    }
                }
                else if(value instanceof Object) {
                    for(subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if(value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function(data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }])
    .run(['$rootScope', '$state', function ($rootScope, $state) {

        //IE8 fix for non-existent indexOf extension
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (obj, start) {
                for (var i = (start || 0), j = this.length; i < j; i++) {
                    if (this[i] === obj) {
                        return i;
                    }
                }
                return -1;
            }
        }
    }]);