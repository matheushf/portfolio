'use strict';

angular.module('portfolioApp')
  .directive('menuActive', ['$location', function ($location) {
    return {
      restrict: 'AE',
      link: function activeMenu(scope) {

        scope.$watch(function () {
          return $location.path();
        }, function (newValue, oldValue) {
          if (newValue) {
            // Set active menu class
            $(function () {
              var path = $location.path().replace('/', '');

              $("#menu").find("li").each(function () {
                if ($(this).find('a').attr('href').replace('#', '') == path)
                  $(this).css('background-color', 'rgba(172, 131, 87, 0.30)');
                else
                  $(this).css('background-color', '');
              });
            });
          }
        });
      }
    };
  }]);
