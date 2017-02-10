/**
 * @ngdoc function
 * @name guiCrawlerApp.controller:AppCtrl
 * @description
 * # AppCtrl
 *
 * Collecting all needed Controllers for the app in here. For defining
 * a controller with a socket broadcasting, just add `socket` to the
 * parameter list loaded inside the controller.
 */

'use strict';

angular
    .module('guiCrawlerApp')
    .controller('AppCtrl', AppCtrl);

/* @ngInject */
function AppCtrl($scope, Socket) {
    $scope.newCrawler = 'http://www.cafefaust.de';

    // Socket listeners
    // ================
    Socket.on('get:url', function (data) {
        console.log('scraped', data.url);
    });

    // Methods published to the scope
    // ==============================
    $scope.startCrawler = function () {
        console.log('starting crawler: ', $scope.newCrawler);

        Socket.emit('send:url', {
            url: $scope.newCrawler
        }, function (result) {
            if (!result) {
                alert('There was an error changing your name');
            } else {
                console.log(result);
            }
        });
    };
};


