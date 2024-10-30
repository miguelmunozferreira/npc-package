const saludos = [
  "Hola",
  "Bienvenido",
  "Que tengas un buen dia",
  "Nos vemos mañana",
  "Ha sido un placer",
  "Encantando de conocerte",
];

function randomSaludo() {
  var index = Math.floor(Math.random() * saludos.length);
  return saludos[index];
}

module.exports = {
  randomSaludo,
};
