// chistes.js
const jokes = [
    '¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.',
    '¿Cómo se llama el campeón de buceo japonés? Tokofondo. ',
    '¿Qué hace una abeja en el gimnasio? ¡Zum-ba!',
    '¿Cómo se llama el campeón de esgrima? Maximiliano.',
    '¿Qué hace una abeja en el gimnasio? ¡Zum-ba!',
    '¿Cuál es el colmo de un electricista? No tener corriente.',
    '¿Cómo se llama el campeón de buceo japonés? Tokofondo.'
  ];
  
  function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }
  
  module.exports = {
    getRandomJoke
  };
  