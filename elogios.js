// elogios.js
const elogios = [
    'Eres una persona asombrosa.',
    'Tienes un corazón lleno de bondad y compasión.',
    'Siempre encuentras la manera de alegrar el día de los demás.',
    'Tu dedicación y esfuerzo son realmente inspiradores.',
    'La forma en que enfrentas los desafíos demuestra tu valentía.',
    'Eres un amigo leal y siempre estás ahí cuando se te necesita.',
    'Tus habilidades y talentos son impresionantes.',
    'Tu positividad es contagiosa y hace que todos se sientan mejor.',
    'Eres un ejemplo a seguir para todos a tu alrededor.',
    'Tu creatividad no tiene límites y siempre sorprendes con tus ideas.',
    'La pasión que pones en todo lo que haces es admirable.',
    'Tienes un espíritu increíblemente resiliente que inspira a otros.',
    'Tu empatía y comprensión hacen del mundo un lugar mejor.',
    'Tus logros muestran tu dedicación y esfuerzo incansable.',
    'Eres una fuente constante de inspiración para quienes te rodean.',
    'Tu capacidad para superar obstáculos es increíblemente inspiradora.',
    'Siempre encuentras soluciones creativas para cualquier desafío.',
    'Tienes un corazón generoso y siempre estás dispuesto a ayudar.',
    'Eres una luz brillante en la vida de quienes te conocen.',
    'Tu optimismo y esperanza son contagiosos y animan a todos.',
    'Nunca dejas de sorprendernos con tu creatividad y originalidad.',
    'Eres un líder natural y sabes guiar a otros con sabiduría.',
    'Tienes un don para hacer que las personas se sientan valoradas.',
    'Tu humildad y amabilidad son admirables y te hacen destacar.',
    'Eres un ejemplo de perseverancia y determinación.',
    'Tu honestidad y sinceridad son cualidades admirables.',
    'Siempre encuentras el lado positivo de cualquier situación.',
    'Eres una fuente inagotable de energía positiva.',
    'Tu capacidad para escuchar y comprender es una bendición.',
    'Tienes un corazón de oro y siempre estás dispuesto a dar.',
    'Eres un faro de esperanza en tiempos de dificultad.',
    'Tus palabras y acciones hacen del mundo un lugar más hermoso.',
    'Eres un ser humano excepcional en todos los sentidos.'
  ];
  
  function getRandomElogio() {
    const randomIndex = Math.floor(Math.random() * elogios.length);
    return elogios[randomIndex];
  }
  
  module.exports = {
    getRandomElogio
  };
  