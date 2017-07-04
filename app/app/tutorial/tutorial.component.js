'use strict';

angular
        .module('personalSiteApp')
        .component('tutorial', {
            templateUrl:'app/tutorial/tutorial.template.html',
            controller: ['$http', function ($http) {
                    var self = this;
                    
                    self.orderProp = 'order';
                    
                    $http.get('/assets/data/tutorials.json').then(function (response) {
                       self.tutorials = response.data; 
                    });
            }]
});