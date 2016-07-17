'use strict';

angular
        .module('personalSiteApp')
        .config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {
                $locationProvider.html5Mode(true);
                
                $routeProvider
                        .when('/home', {
                            template: '<home></home>'
                        })
                        .when('/contact', {
                            template: '<contact></contact>'
                        })
                        .when('/portfolio', {
                            template: '<portfolio></portfolio>'
                        })
                        .when('/portfolio/:id', {
                            template: '<portfoliodetails></portfoliodetails>'
                        })
                        .when('/tutorials', {
                            template: '<tutorial></tutorial>'
                        })
                        .otherwise({
                            template: '<home></home>'
                        });
            }])
            .config(['AnalyticsProvider', function (analytics) {
                analytics
                .setAccount('UA-80904823-1')
                .useDisplayFeatures(true)
                .useEnhancedLinkAttribution(true);
            }]);


