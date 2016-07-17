'use strict';

angular
        .module('home')
        .component('home', {
            templateUrl: 'app/home/home.template.html',
            controller: ['$http', 'Analytics', function HomeController($http, analytics) {
                    //analytics.trackPage('/');
                    return false;
            }]
});


