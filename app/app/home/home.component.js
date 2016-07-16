'use strict';

angular
        .module('home')
        .component('home', {
            templateUrl: 'app/home/home.template.html',
            controller: ['$http', function HomeController($http) {
                    return false;
            }]
});


