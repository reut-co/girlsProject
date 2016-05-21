/**
 * Created by shlomit.c on 17/05/2016.
 */
(function () {
    'use strict';

    var Clotika = angular.module('Clotika', ['ui.router']);

    var baseDir = "/pages/";
    var homeDir = baseDir + "dashboard/";
    var viewItemsDir = baseDir + "viewItems/";

    Clotika.config(function($urlRouterProvider, $stateProvider,$locationProvider){
        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: homeDir + 'templates/dashboard.html'
            })
           /* .state('login', {
                url: '/login',
                templateUrl: 'Templates/login.html'
            })*/
            .state('viewItems', {
                url: 'viewItems/:itemType', // itemType options: clothes, bags, accessories
                templateUrl: viewItemsDir + 'templates/viewItems.html'
            })
        ;

        $locationProvider.html5Mode(true);
    })
})();
