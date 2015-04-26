angular.module('myApp')
.config(function ($translateProvider) {
  $translateProvider.translations('es', {
    BIENVENIDO: 'BIENVENID@',
    PROGRAMA: 'PROGRAMA',
    PROGRAMA_CIUDADANO: 'PROGRAMA CIUDADANO',
    COMPROMISOS: 'COMPROMISOS',
    CANDIDATOS: 'CANDIDAT@S',
    CANDIDATOS_LOW: 'Candidat@s',
    MULTIMEDIA: 'MULTIMEDIA',
    COMPROMISOS :'21 COMPROMISOS',
    CONTACTO : 'CONTACTO',
    CONTACTO_LOW : 'Contacto',
    DUDAS: 'Envíanos tus dudas, cuestiones o sugerencias mediante este formulario.',
    NOMBRE: 'Nombre',
    EMAIL: 'Email',
    MENSAJE: 'Mensaje',
    ENVIAR: 'Enviar',
    MUCHAS_GRACIAS: '¡Muchas gracias!',
    ENVIADO_CORRECTAMENTE: 'Tu mensaje se ha enviado correctamente.',
    VOLVER_INICIO: 'Volver a la página de inicio',
    ESTOS_CANDIDATOS: 'Estos son los candidatos elegidos en primarias para el ayuntamiento de Foios',
    PROGRAMA_ELECTORAL: 'Programa electoral',
    PROXIMAMENTE: 'Proximamente...'
  });
  $translateProvider.translations('va', {
    BIENVENIDO: 'BENVINGUTS',
    PROGRAMA: 'PROGRAMA',
    PROGRAMA_CIUDADANO: 'PROGRAMA CIUDADANO',
    COMPROMISOS: 'COMPROMISES',
    CANDIDATOS: 'CANDIDATES',
    CANDIDATOS_LOW: 'Candidat@s',
    MULTIMEDIA: 'MULTIMEDIA',
    COMPROMISOS :'21 COMPROMISOS',
    CONTACTO : 'CONTACTO',
    CONTACTO_LOW : 'Contacto',
    DUDAS: 'Envíanos tus dudas, cuestiones o sugerencias mediante este formulario.',
    NOMBRE: 'Nombre',
    EMAIL: 'Email',
    MENSAJE: 'Mensaje',
    ENVIAR: 'Enviar',
    MUCHAS_GRACIAS: '¡Muchas gracias!',
    ENVIADO_CORRECTAMENTE: 'Tu mensaje se ha enviado correctamente.',
    VOLVER_INICIO: 'Volver a la página de inicio',
    ESTOS_CANDIDATOS: 'Estos son los candidatos elegidos en primarias para el ayuntamiento de Foios',
    PROGRAMA_ELECTORAL: 'Programa electoral',
    PROXIMAMENTE: 'Proximamente...'
  });
  $translateProvider.preferredLanguage('es');
});