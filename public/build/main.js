/**
 * Created by shlomit.c on 17/05/2016.
 */
(function () {
    'use strict';

    var Clotika = angular.module('Clotika', ['ui.router']);

    var baseDir = "/js/";

    Clotika.config(function($urlRouterProvider, $stateProvider){
        $stateProvider
            .state('home', {
                url: '/',
                template:'<div>home</div>'
                //templateUrl: ''
            })
           /* .state('login', {
                url: '/login',
                templateUrl: 'Templates/login.html'
            })*/
            .state('viewItems', {
                url: 'viewItems/:itemType', // itemType options: clothes, bags, accessories
                templateUrl: baseDir + 'viewItems/templates/viewItems.html'
            })
        ;
    })
})();
;/**
 * Created by shlomit.c on 21/05/2016.
 */
(function() {
    var Clotika = angular.module('Clotika');
    Clotika.controller('ViewItemsCtrl', ['$stateParams', function ($stateParams) {

        var vm = this;

        vm.bla = $stateParams.itemType;
    }]);
}());