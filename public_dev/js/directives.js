'use strict';

angular.module(
    "Portfolio.directives",
    []
)
    .directive('scrollsizescanner', ['$window', '$timeout', function($window, $timeout) {
        return {
            restrict : 'A',
            replace: false,
            controller : ['$scope', function($scope) {

            }],
            link : function (scope, element, attrs) {
                var contentContainer = element.find('div')[0],
                    padding = (attrs.pad) ? attrs.pad : 0;
                contentContainer = angular.element(contentContainer).find('div')[0];

                $timeout(function() {
                    resizeElement();
                }, 200);

                angular.element($window).bind('resize', function() {
                    resizeElement();
                });

                scope.$watch(attrs.ngShow, function(newValue,oldvalue) {
                    if (newValue)
                        $timeout(function() {
                            resizeElement();
                        }, 400);
                });

                var resizeElement = function () {

                    if ((contentContainer.offsetHeight + padding) >= $window.innerHeight) {
                        element.css('height', ($window.innerHeight -padding) + 'px');
                    } else {
                        //Find child element which has not restricted height
                        element.css('height', (contentContainer.offsetHeight) + 'px');
                    }

                    scope.$parent.$broadcast('rebuild:scrollbar');
                }
            }
        }
    }])

;