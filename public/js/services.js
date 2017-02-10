/**
 * @ngdoc factory
 * @name guiCrawlerApp.Socket
 * @description
 * # Socket
 * Service in the guiCrawlerApp.Socket
 */

'use strict';

angular
    .module('guiCrawlerApp')
    .factory('Socket', Socket);

function Socket($rootScope) {
    var socket = io.connect();

    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
}

