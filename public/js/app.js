/**
 * @ngdoc overview
 * @name guiCrawlerApp
 * @description
 * # guiCrawlerApp
 *
 * Main module of the application.
 * All the AngularJS magic happens here. The main module is loaded here
 * and grabs all dependencies, internal and external ones.
 */

'use strict';

angular
    .module('guiCrawlerApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider, $locationProvider) {
        // Declare routes for the frontend and load the correct
        // templates and controllers.
        $routeProvider.when('/new-crawler', {
            templateUrl: 'partials/new-crawler',
            controller: 'AppCtrl'
        }).otherwise({
            redirectTo: '/new-crawler'
        });

        $locationProvider.html5Mode(true);
    });