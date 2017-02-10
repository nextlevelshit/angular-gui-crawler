/**
 * @ngdoc directive
 * @element appVersion
 * @name guiCrawlerApp.directive:appVersion
 * @restrict A
 * @description
 *
 */

(function() {
  'use strict';

  angular
      .module('guiCrawlerApp')
      .directive('appVersion', appVersion);

  function appVersion(version) {

    return {
      link: linkFn,
      restrict: 'A',
      scope: false
    };

    function linkFn(scope, element, attrs) {
      element.text(version);
    };
  }
});
