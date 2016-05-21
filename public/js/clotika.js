/**
 * Created by shlomit.c on 17/05/2016.
 */
(function () {
    'use strict';

    var Clotika = angular.module('Clotika', ['ui.router']);

    var baseDir = "/js/";
    var homeDir = baseDir + "home/";
    var viewItemsDir = baseDir + "viewItems/";

    Clotika.config(function($urlRouterProvider, $stateProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: homeDir + 'templates/home.html'
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
    })
})();
