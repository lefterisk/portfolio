'use strict';

/* Services */

angular.module('Portfolio.services', [])
    .factory('Portfolio', ['$resource', function ($resource) {
        return $resource('/data/portfolio.json',{}, { 'get': {method: 'GET'}});
    }])
    .factory('PortfolioItems', ['$q','Portfolio', function ($q,Portfolio) {
        return function () {
            var delay = $q.defer();
            Portfolio.get(function (data) {
                delay.resolve(data);
            }, function () {
                delay.reject('Unable to fetch data');
            });
            return delay.promise;
        };
    }])
;