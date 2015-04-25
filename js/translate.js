angular.module('myApp')
.config(function ($translateProvider) {
  $translateProvider.translations('es', {
    BIENVENIDO: 'Bienvenid@',
    PROGRAMA: 'Programa',
    NUESTRO_PROGRAMA: 'Nuestro Programa',
    COMPROMISOS: 'Compromisos',
    CANDIDATOS: 'Candidat@s'
  });
  $translateProvider.translations('va', {
    BIENVENIDO: 'Benvinguts',
    PROGRAMA: 'Programa',
    NUESTRO_PROGRAMA: 'Nostre Programa',
    COMPROMISOS: 'Compromises',
    CANDIDATOS: 'Candidates'
  });
  $translateProvider.preferredLanguage('es');
});