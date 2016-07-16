'use strict';

angular
        .module('personalSiteApp')
        .component('contact', {
            templateUrl: 'app/contact/contact.template.html',
            controller: ['$http', function ($http) {
                    var self = this;
                    
                    $http.get('assets/data/contact.json').then(function (response) {
                            self.methods =  response.data;
                        });
                    }]
});

