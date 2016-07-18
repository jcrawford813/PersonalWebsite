'use strict';

var app = angular.module('personalSiteApp');

app
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                    .when('/', {
                        title: 'Intro',
                        template: '<home></home>'
                    })
                    .when('/contact', {
                        title: 'Contact Me',
                        template: '<contact></contact>'
                    })
                    .when('/portfolio', {
                        title: 'App Portfolio',
                        template: '<portfolio></portfolio>'
                    })
                    .when('/portfolio/:id', {
                        template: '<portfoliodetails></portfoliodetails>'
                    })
                    .when('/tutorials', {
                        title: 'Tutorials',
                        template: '<tutorial></tutorial>'
                    })
                    .when ('/tutorials/:name', {
                        template: '<tutorialdetail></tutorialdetail>'
                    })
                    .otherwise({
                        title: 'Intro',
                        template: '<home></home>'
                    });
        }])
        .config(['AnalyticsProvider', function (analytics) {
            analytics
            .setAccount('UA-80904823-1')
            .useDisplayFeatures(true)
            .useEnhancedLinkAttribution(true);
        }]);


app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);