'use strict';

angular
        .module('personalSiteApp')
        .component('tutorial', {
            templateUrl:'app/tutorial/tutorial.template.html',
            controller: ['$http', 'Analytics', function ($http, analytics) {
                    analytics.trackPage('/tutorial');
                    return false;
            }]
});