angular.module('myApp')
.controller('HeaderController', function ($scope,$location,$translate) { 
    
    $scope.selectedLanguage = 'es';

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.changeLanguage = function (key) {
      $scope.selectedLanguage = key;
      $translate.use(key);
    };
})
.controller('WelcomeController', function ($scope,$timeout) {
  // hack to reload twitter feed
  $timeout = twttr.widgets.load();
});