/**
 * Created by shlomit.c on 17/05/2016.
 */
(function () {
    'use strict';

    var Clotika = angular.module('Clotika', ['ui.router']);

    Clotika.config(function($urlRouterProvider, $stateProvider){
        $stateProvider
            .state('home', {
                url: '/',
                template:'<div>home</div>'
                //templateUrl: ''
            })
            .state('login', {
                url: '/login',
                templateUrl: 'Templates/login.html'
            })
        ;
    })
})();
