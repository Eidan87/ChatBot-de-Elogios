// responses.js
const responses = [
  { trigger: 'hola', response: '¡Hola! ¿Cómo estás hoy?' },
  { trigger: 'gracias', response: '¡De nada! Siempre estoy aquí para apoyarte.' },
  { trigger: 'necesito motivación', response: 'Recuerda que cada desafío es una oportunidad para crecer y aprender. ¡Tú puedes hacerlo!' },
  { trigger: 'terminé un proyecto', response: '¡Felicidades! Terminar proyectos es un logro increíble. ¡Estoy orgulloso de ti!' },
  { trigger: 'adiós', response: '¡Hasta luego! Siempre estoy aquí si necesitas más apoyo. ¡Que tengas un día maravilloso!' },
  { trigger: '¿cómo estás?', response: '¡Estoy aquí y listo para ayudarte! ¿Cómo estás tú?'},
  { trigger: 'buenos días', response: '¡Buenos días! Espero que tengas un día lleno de energía y positividad.' },
  { trigger: 'buenas noches', response: '¡Buenas noches! Descansa bien y sueña con grandes cosas.' },
  { trigger: '¿qué tal tu día?', response: 'Mi día siempre está mejorando gracias a interacciones como esta. ¿Cómo ha sido tu día?' },
  { trigger: 'gracias por escucharme', response: 'Siempre estoy aquí para escucharte y apoyarte. No dudes en compartir tus pensamientos en cualquier momento.' }
];

function findResponse(message) {
  const lowercaseMessage = message.toLowerCase();
  const foundResponse = responses.find(response => lowercaseMessage.includes(response.trigger));
  return foundResponse ? foundResponse.response : null;
}

module.exports = {
  findResponse
};