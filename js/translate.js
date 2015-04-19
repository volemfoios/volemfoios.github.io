angular.module('myApp')
.config(function ($translateProvider) {
  $translateProvider.translations('es', {
    BIENVENIDO: 'Bienvenid@',
    PROGRAMA: 'Programa',
    CANDIDATOS: 'Candidat@s'
  });
  $translateProvider.translations('va', {
    BIENVENIDO: 'Benvinguts',
    PROGRAMA: 'Programa',
    CANDIDATOS: 'Candidates'
  });
  $translateProvider.preferredLanguage('es');
});