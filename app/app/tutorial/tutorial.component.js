'use strict';

angular
        .module('personalSiteApp')
        .component('tutorial', {
            templateUrl:'app/tutorial/tutorial.template.html',
            controller: ['$http', function ($http) {
                    return false;
            }]
});