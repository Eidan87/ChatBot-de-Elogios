// modoRespuesta.js

// Función para obtener una respuesta personalizada basada en el estado de ánimo del usuario
function getMoodResponse(userMessage) {
    const positiveKeywords = ['feliz', 'contento', 'genial', 'emocionado'];
    const negativeKeywords = ['triste', 'enojado', 'frustrado', 'cansado'];
  
    const lowerCaseMessage = userMessage.toLowerCase();
  
    for (const keyword of positiveKeywords) {
      if (lowerCaseMessage.includes(keyword)) {
        return "¡Eso suena maravilloso! ¡Te mereces todos los elogios del mundo!";
      }
    }
  
    for (const keyword of negativeKeywords) {
      if (lowerCaseMessage.includes(keyword)) {
        return "Lamento escuchar que te sientes así. Recuerda que tienes muchas cualidades positivas.";
      }
    }
  
    return null; // No se encontraron palabras clave relevantes
  }
  
  module.exports = {
    getMoodResponse
  };
  