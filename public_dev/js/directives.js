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
                    angle = (attrs.angle) ? parseInt(attrs.angle) : 0;
                contentContainer = angular.element(contentContainer).find('div')[0];

                angular.element($window).bind('resize', function() {
                    resizeElement();
                });

                scope.$watch(attrs.ngShow, function(newValue,oldvalue) {
                    if (newValue) {
                        $timeout(function() {
                            resizeElement();
                        }, 400);
                    }

                });

                var resizeElement = function () {

                    if (angle > 0) {

                        var heightForAngle = (contentContainer.offsetHeight * (angle/100));

                        if ((contentContainer.offsetHeight + heightForAngle + 40) >= $window.innerHeight) {
                            element.css({
                                'position' : 'relative',
                                'height': ($window.innerHeight + heightForAngle - 40) + 'px',
                                'top' : -heightForAngle + 'px'
                            });
                            angular.element(contentContainer).css({
                                'padding-top' : heightForAngle + 'px'
                            });
                        } else {
                            //Find child element which has not restricted height
                            element.css('height', (contentContainer.offsetHeight) + 'px');
                        }

                    } else {
                        if ((contentContainer.offsetHeight + 40) >= $window.innerHeight) {
                            element.css('height', ($window.innerHeight - 40) + 'px');
                        } else {
                            //Find child element which has not restricted height
                            element.css('height', (contentContainer.offsetHeight) + 'px');
                        }
                    }

                    scope.$emit('content.changed');
                }
            }
        }
    }])
;