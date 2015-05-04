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
  $timeout(function() {
    if(typeof twttr !== 'undefined'){
      twttr.widgets.load();
    }
  });
})
.controller('CandidatosController', function ($scope,CANDIDATOS) {
  $scope.candidatos = CANDIDATOS;
})
.controller('CandidatoController', function ($scope,$http,$routeParams) {
  $http.get('/data/' + $routeParams.candidatoID + '.json').
    success(function(data, status, headers, config) {
      $scope.candidato = data;
    }).
    error(function(data, status, headers, config) {
      console.log('Error getting candidato');
    });         
})
.controller('CompromisosController', function ($scope,$translate,$http) {
  var uri = 'compromisos_' + $translate.use();

  $http.get('/data/' + uri + '.json').
    success(function(data, status, headers, config) {
      $scope.compromisos = data;
    }).
    error(function(data, status, headers, config) {
      console.log('Error getting compromisos');
    }); 
});
