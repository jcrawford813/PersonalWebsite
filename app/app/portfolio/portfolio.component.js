'use strict';

angular
        .module('personalSiteApp')
        .component('portfolio', {
            templateUrl: 'app/portfolio/portfolio.template.html',
            controller: ['$http', function($http) {
                 //analytics.trackPage('/portfolio');
                 var self = this;
                 self.orderProp = "title";
                 
                 $http.get('assets/data/projects.json').then(function (response) {
                     self.projects = response.data;
                 });
            }]
        });