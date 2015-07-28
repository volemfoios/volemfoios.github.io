angular.module('myApp')
.config(function ($translateProvider) {
  $translateProvider.translations('es', {
    BIENVENIDO: 'BIENVENID@',
    PROGRAMA: 'PROGRAMA',
    PROGRAMA_CIUDADANO: 'PROGRAMA PARTICIPATIVO',
    COMPROMISOS: 'COMPROMISOS',
    CANDIDATOS: 'CANDIDAT@S',
    CANDIDATOS_LOW: 'Candidat@s',
    MULTIMEDIA: 'VIDEOS',
    MULTIMEDIA_LOW: 'Videos',
    COMPROMISOS :'21 COMPROMISOS',
    CONTACTO : 'CONTACTO',
    CONTACTO_LOW : 'Contacto',
    DUDAS: 'Envíanos tus dudas, propuestas o sugerencias mediante este formulario. El nombre y el email son opcionales.',
    NOMBRE: 'Nombre',
    EMAIL: 'Email',
    MENSAJE: 'Mensaje',
    ENVIAR: 'Enviar',
    MUCHAS_GRACIAS: '¡Muchas gracias!',
    ENVIADO_CORRECTAMENTE: 'Tu mensaje se ha enviado correctamente.',
    VOLVER_INICIO: 'Volver a la página de inicio',
    ESTOS_CANDIDATOS: 'Estos son los y las candidatas elegidos en las primarias abiertas para el ayuntamiento de Foios',
    PROGRAMA_ELECTORAL: 'Programa participativo',
    PROXIMAMENTE: 'Próximamente...',
    COMPROMISOS_ADQUIRIDOS: 'Compromisos',
    DOCUMENTOS: 'DOCUMENTOS',
    DOCUMENTOS_LOW: 'Documentos',
    ABRIR: 'Abrir',
    NOMBRE_LOW: 'Nombre',
    ENLACE_LOW: 'Enlace',
    PROGRAMA_GOBIERNO: 'Programa de gobierno',
    GASTOS: 'Gastos',
    GASTOS_EXCEL: 'Gastos Campaña'
  });
  $translateProvider.translations('va', {
    BIENVENIDO: 'BENVINGUTS/DES',
    PROGRAMA: 'PROGRAMA',
    PROGRAMA_CIUDADANO: 'PROGRAMA PARTICIPATIU',
    COMPROMISOS: 'COMPROMISOS',
    CANDIDATOS: 'CANDIDATS/ES',
    CANDIDATOS_LOW: 'Candidats/es',
    MULTIMEDIA: 'VIDEOS',
    MULTIMEDIA_LOW: 'Videos',
    COMPROMISOS :'21 COMPROMISOS',
    CONTACTO : 'CONTACTE',
    CONTACTO_LOW : 'Contacte',
    DUDAS: 'Envia\'ns els teus dubtes, propostes o suggerències per mitjà d\'este formulari. El nom i l\'email són opcionals.',
    NOMBRE: 'Nom',
    EMAIL: 'Email',
    MENSAJE: 'Missatge',
    ENVIAR: 'Enviar',
    MUCHAS_GRACIAS: '¡Moltes gràcies!',
    ENVIADO_CORRECTAMENTE: 'El teu missatge s\'ha enviat correctament.',
    VOLVER_INICIO: 'Tornar a la pàgina d\'inici',
    ESTOS_CANDIDATOS: 'Estos són els i les candidates triades en primàries obertes per a l\'ajuntament de Foios',
    PROGRAMA_ELECTORAL: 'Programa participatiu',
    PROXIMAMENTE: 'Pròximament...',
    COMPROMISOS_ADQUIRIDOS: 'Compromisos',
    DOCUMENTOS: 'DOCUMENTS',
    DOCUMENTOS_LOW: 'Documents',
    ABRIR: 'Obrir',
    NOMBRE_LOW: 'Nom',
    ENLACE_LOW: 'Enllaç',
    PROGRAMA_GOBIERNO: 'Programa de Govern',
    GASTOS: 'Despeses Campanya',
    GASTOS_EXCEL: 'Despeses excel'
  });
  $translateProvider.preferredLanguage('es');
});