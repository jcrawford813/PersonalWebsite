'use strict';

angular
        .module('home')
        .component('home', {
            templateUrl: 'app/home/home.template.html',
            controller: ['$http', 'Analytics', function HomeController($http, $rootScope, analytics) {
                    return false;
            }]
});


