'use strict';

angular
        .module('personalSiteApp')
        .component('portfoliodetails', {
            templateUrl: 'app/portfolio-details/portfolio-details.template.html',
            controller: ['$http', '$routeParams', function ($http, $routeParams) {
                    var self = this;
                    
                    $http.get('assets/data/projects.json').then(function (response) {
                        angular.forEach(response.data, function (project) {
                            if (project.id === $routeParams.id)
                                self.project = project;
                        });
                    });
            }]
});