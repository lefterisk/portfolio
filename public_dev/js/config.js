'use strict';

// IE8 fix - be careful not to use console.warn() - it will cause IE8 to silently not run angular.
var console = console || {};

angular.module('Portfolio', [
    'ui.router',
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngCookies',
    'ngTouch',
    'angular-loading-bar',

    'ngScrollable',

    'angular-google-analytics',

    //App
    'Portfolio.controllers',
    'Portfolio.services',
    'Portfolio.tpls',
    'Portfolio.directives'
])
    .config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            // All app states loaded in index.php
            .state('home', { url: '/', templateUrl: './tpls/home.html', controller: 'HomeCtrl'})
            .state('home.about', { url: 'about',
                views : {
                    'about' : {
                        templateUrl: './tpls/about.html',
                        controller: 'AboutCtrl'
                    }
                }
            })
            .state('home.work', { url: 'work',
                views : {
                    'work' : {
                        templateUrl: './tpls/work.html',
                        controller: 'WorkCtrl'
                    }
                },
                resolve: {
                    PortfolioItems: function (PortfolioItems) {
                        return PortfolioItems();
                    }
                }
            })
            .state('404', { url: '/404', templateUrl: './tpls/404.html', controller: 'NotFoundCtrl'})
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
    .config(function(AnalyticsProvider) {
        // initial configuration
        AnalyticsProvider.setAccount('UA-32876846-1');

        // track all routes (or not)
        AnalyticsProvider.trackPages(true);

        //Optional set domain (Use 'none' for testing on localhost)
//        AnalyticsProvider.setDomainName('ack-2014.acknowledgement.co.uk');

        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(false);

        // Ignore first page view... helpful when using hashes and whenever your bounce rate looks obscenely low.
        AnalyticsProvider.ignoreFirstPageLoad(true);

        // change page event name for ui-router
        AnalyticsProvider.setPageEvent('$stateChangeSuccess');
    })
    .run(['$rootScope', '$state', 'Analytics', function ($rootScope, $state, Analytics) {

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