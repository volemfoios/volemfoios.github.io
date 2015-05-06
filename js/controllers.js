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
.controller('ProgramaController', function ($scope) {
  $scope.pdfUrl = '/docs/programa_volem_foios_es.pdf';
  $scope.loading = 'Cargando';
  $scope.pdfName = 'Programa'
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
  
  $scope.language = $translate.use();

  setLanguage($translate.use());

  $scope.$watch(
    function() { 
      return $translate.use(); 
    }, function(newValue, oldValue) {
      setLanguage(newValue);
  });

  function setLanguage(lang){
    var uri = 'compromisos_' + lang;

    $http.get('/data/' + uri + '.json').
      success(function(data, status, headers, config) {
        $scope.compromisos = data;
      }).
      error(function(data, status, headers, config) {
        console.log('Error getting compromisos');
      });
  }
})
.controller('MultimediaController', function ($scope, $http, $modal) {
  $http.get('/data/multimedia.json').
    success(function(data, status, headers, config) {
      $scope.multimedia = data;
    }).
    error(function(data, status, headers, config) {
      console.log('Error getting multimedia');
    }
  );

  $scope.open = function(video) {
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'video.html',
      size: 'lg',
      controller: 'ModalInstanceCtrl',
      resolve: {
        video: function () {
          return video;
        }
      }
    });
  };
}).controller('ModalInstanceCtrl', function ($scope, $modalInstance, video) {

  $scope.video = video;
 
  $scope.close = function () {
    $modalInstance.close();
  };

});
