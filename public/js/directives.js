'use strict';

/* Directives */

angular.module('guiCrawler.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
