'use strict';

angular
        .module('personalSiteApp')
        .component('portfolio', {
            templateUrl: 'app/portfolio/portfolio.template.html',
            controller: ['$http', function($http) {
                 var self = this;
                 self.orderProp = "title";
                 
                 $http.get('assets/data/projects.json').then(function (response) {
                     self.projects = response.data;
                 });
            }]
        });