// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const arrayAmigos = []
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

function agregarAmigo() {
    const nombre = amigo.value;

    if (nombre === "") {
      alert("Por favor, escribe un nombre válido.");
      return;
    } else if (!nameRegex.test(nombre)) {
      alert("El nombre no es válido.");
      return;
    }

    listaAmigos.innerHTML += `<li class="name-item">${nombre}</li>`;

    arrayAmigos.push(nombre);
    amigo.value = "";
}

function sortearAmigo() {
  const numeroAleatorio = Math.floor(Math.random() * arrayAmigos.length);
  let amigoSecreto = arrayAmigos[numeroAleatorio];

  resultado.innerHTML += `<li>El amigo secreto sorteado es: <span class="resultado-nombre">${amigoSecreto}</span></li>`;
  arrayAmigos.splice(numeroAleatorio, 1);

  if (arrayAmigos.length === 0) {
    resultado.innerHTML = ""
    listaAmigos.innerHTML = ""
  }
}


amigo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});