// app.js
const express = require('express');
const bodyParser = require('body-parser');
const responsesModule = require('./responses');
const elogiosModule = require('./elogios');
const learnedResponsesModule = require('./learnedResponses');
const moodResponseModule = require('./modoRespuesta'); 
const contarChistesModule = require('./chistes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
let conversationHistory = [];

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;
  let reply = '';

  // Manejar el mensaje de bienvenida
  if (userMessage === 'welcome') {
    reply = "¡Bienvenido a nuestro chat de elogios! En este chat, puedes interactuar con el bot de elogios. Algunas cosas que puedes hacer:\n\n" +
            "- Envía mensajes para conversar con el bot.\n" +
            "- Usa comandos como '/historial' para ver el historial de conversaciones.\n" +
            "- Pide un elogio personalizado escribiendo 'elogio' seguido de tu elogio.\n" +
            "- Si necesitas ayuda, simplemente escribe 'ayuda'.\n" +
            "- Si quieres escuchar un chiste, solo escribe 'chiste'.";
  } else {
    if (userMessage.startsWith('ayuda')) {
      reply = 'Puedes escribir mensajes o usar comandos como /historial para ver el historial de conversaciones.';
    } else if (userMessage.startsWith('historial')) {
      if (conversationHistory.length === 0) {
        reply = 'No hay conversaciones anteriores.';
      } else {
        reply = 'Historial de conversaciones:\n';
        conversationHistory.forEach((message, index) => {
          reply += `${index + 1}. Tú: ${message.userMessage}\n`;
          reply += `   Bot: ${message.botReply}\n`;
        });
      }
    } else if (userMessage.startsWith('elogio')) {
      const elogioPersonalizado = userMessage.slice('elogio'.length).trim();
      if (elogioPersonalizado) {
        reply = `¡${elogioPersonalizado}!`;
      } else {
        reply = elogiosModule.getRandomElogio();
      }
    } else {
      const customResponse = responsesModule.findResponse(userMessage);

      if (customResponse) {
        reply = customResponse;
      } else {
        const randomElogio = elogiosModule.getRandomElogio();
        reply = randomElogio;
      }

      // Intentamos obtener una respuesta basada en el estado de ánimo del usuario
      const moodResponse = moodResponseModule.getMoodResponse(userMessage);
      if (moodResponse) {
        reply = moodResponse;
      } else if (userMessage.includes('chiste')) {
        const randomJoke = contarChistesModule.getRandomJoke();
        reply = randomJoke;
      }

      conversationHistory.push({ userMessage, botReply: reply });
      res.json({ reply });
    }
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
