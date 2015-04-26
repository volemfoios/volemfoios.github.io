angular.module('myApp')
.config(function ($translateProvider) {
  $translateProvider.translations('es', {
    BIENVENIDO: 'BIENVENID@',
    PROGRAMA: 'PROGRAMA',
    PROGRAMA_CIUDADANO: 'PROGRAMA DE LA CIUDADANIA',
    COMPROMISOS: 'COMPROMISOS',
    CANDIDATOS: 'CANDIDAT@S',
    CANDIDATOS_LOW: 'Candidat@s',
    MULTIMEDIA: 'MULTIMEDIA',
    COMPROMISOS :'21 COMPROMISOS',
    CONTACTO : 'CONTACTO',
    CONTACTO_LOW : 'Contacto',
    DUDAS: 'Envíanos tus dudas, propuestas o sugerencias mediante este formulario.',
    NOMBRE: 'Nombre',
    EMAIL: 'Email',
    MENSAJE: 'Mensaje',
    ENVIAR: 'Enviar',
    MUCHAS_GRACIAS: '¡Muchas gracias!',
    ENVIADO_CORRECTAMENTE: 'Tu mensaje se ha enviado correctamente.',
    VOLVER_INICIO: 'Volver a la página de inicio',
    ESTOS_CANDIDATOS: 'Estos son los y las candidatas elegidos en las primarias abiertas para el ayuntamiento de Foios',
    PROGRAMA_ELECTORAL: 'Programa electoral',
    PROXIMAMENTE: 'Próximamente...'
  });
  $translateProvider.translations('va', {
    BIENVENIDO: 'BENVINGUTS/DES',
    PROGRAMA: 'PROGRAMA',
    PROGRAMA_CIUDADANO: 'PROGRAMA DE LA CIUTADANIA',
    COMPROMISOS: 'COMPROMISOS',
    CANDIDATOS: 'CANDIDATS/ES',
    CANDIDATOS_LOW: 'Candidats/es',
    MULTIMEDIA: 'MULTIMEDIA',
    COMPROMISOS :'21 COMPROMISOS',
    CONTACTO : 'CONTACTO',
    CONTACTO_LOW : 'Contacto',
    DUDAS: 'Envia'ns els teus dubtes, propostes o suggerències per mitjà d'este formulari.',
    NOMBRE: 'Nom',
    EMAIL: 'Email',
    MENSAJE: 'Missatge',
    ENVIAR: 'Enviar',
    MUCHAS_GRACIAS: '¡Moltes gràcies!',
    ENVIADO_CORRECTAMENTE: 'El teu missatge s'ha enviat correctament.',
    VOLVER_INICIO: 'Tornar a la pàgina d'inici',
    ESTOS_CANDIDATOS: 'Estos són els i les candidates triats en primàries obertes per a l'ajuntament de Foios,
    PROGRAMA_ELECTORAL: 'Programa electoral',
    PROXIMAMENTE: 'Pròximament...'
  });
  $translateProvider.preferredLanguage('es');
});