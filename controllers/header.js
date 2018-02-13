(function() {
    'use strict';

    angular.module('gotSpa')
        .component('navigation', {
           templateUrl: 'views/header-view.html',
            bindings: {
                navigation: '<'
            }
        });
})();