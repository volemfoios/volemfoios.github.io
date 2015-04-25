angular.module('myApp')
.config(function ($translateProvider) {
  $translateProvider.translations('es', {
    BIENVENIDO: 'BIENVENID@',
    PROGRAMA: 'PROGRAMA',
    NUESTRO_PROGRAMA: 'NUESTRO PROGRAMA',
    COMPROMISOS: 'COMPROMISOS',
    CANDIDATOS: 'CANDIDAT@S',
    MULTIMEDIA: 'MULTIMEDIA'
  });
  $translateProvider.translations('va', {
    BIENVENIDO: 'BENVINGUTS',
    PROGRAMA: 'PROGRAMA',
    NUESTRO_PROGRAMA: 'NOSTRE PROGRAMA',
    COMPROMISOS: 'COMPROMISES',
    CANDIDATOS: 'CANDIDATES',
    MULTIMEDIA: 'MULTIMEDIA'
  });
  $translateProvider.preferredLanguage('es');
});