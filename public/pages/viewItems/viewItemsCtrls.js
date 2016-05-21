/**
 * Created by shlomit.c on 21/05/2016.
 */
(function() {
    var Clotika = angular.module('Clotika');
    Clotika.controller('ViewItemsCtrl', ['$stateParams', function ($stateParams) {

        var vm = this;

        vm.bla = $stateParams.itemType;
    }]);
}());