'use strict';

angular
    .module('personalSiteApp')
    .component('tutorialdetail', {
        templateUrl: 'app/tutorialDetails/tutorial-details.template.html',
        controller: ['$http', '$routeParams', 'Analytics', '$rootScope', function ($http, $routeParams, analytics, $rootScope) {
                var self = this;
                
                self.htmlContent = "";
                self.title = "Test";
                self.synopsis = "More test text.";
                
                $http.get('/assets/data/tutorials.json').then(function (response) {
                    angular.forEach(response.data, function (tut) {
                       if (tut.name === $routeParams.name) {
                            self.title = tut.title;
                            self.synopsis = tut.synopsis;
                            self.tags = tut.tags;
                            
                            $rootScope.title = 'Tutorial - ' + tut.title;
                            $http.get('/assets/tutorials/' + tut.body).then(function (htmlResponse) {
                               self.htmlContent = htmlResponse.data; 
                            });
                            
                            return false;
                       }
                    });
                   
                });
        }]
});

