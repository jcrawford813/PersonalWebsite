'use strict';

angular
        .module('personalSiteApp')
        .component('contact', {
            templateUrl: 'app/contact/contact.template.html',
            controller: ['$http', 'Analytics', function ($http, analytics) {
                    analytics.trackPage('/contact');
                    var self = this;
                    
                    $http.get('assets/data/contact.json').then(function (response) {
                            self.methods =  response.data;
                        });
                    }]
});

