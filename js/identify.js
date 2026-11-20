const preguntas = [
  {
    pregunta: "El pueblito mágico donde todo comenzó...",
    respuesta: "Subachoque"
  },
  {
    pregunta: "¿Qué decía la primer etiqueta que me diste?",
    respuesta: "TQM"
  },
  {
    pregunta: "¿Quién duerme con un peluche? (Name)",
    respuesta: "Samuel"
  },
  {
    pregunta: "¿Quién dijo te amo primero? (Name)",
    respuesta: "Samuel"
  },
  {
    pregunta: "¿Un mes de decisiones?",
    respuesta: "Diciembre"
  },
  {
    pregunta: "¿Quien es un nino mimado? (Name)",
    respuesta: "Samuel"
  }
];

let indiceActual = 0;

const pregunta = document.getElementById("pregunta");
const respuesta = document.getElementById("respuesta");
const mensaje = document.getElementById("mensaje");
const btn = document.getElementById("btnResponder");

mostrarPregunta();

btn.addEventListener("click", validarRespuesta);

function mostrarPregunta() {
  pregunta.textContent = preguntas[indiceActual].pregunta;

  respuesta.value = "";
  mensaje.textContent = "";
  respuesta.focus();
}

function validarRespuesta() {
  const respuestaUsuario =
    respuesta.value.trim().toLowerCase();

  const respuestaCorrecta =
    preguntas[indiceActual].respuesta.toLowerCase();

  if (respuestaUsuario === respuestaCorrecta) {

    mensaje.textContent = "Muy bien!!";
    mensaje.style.color = "#a6ffec";

    indiceActual++;

    if (indiceActual < preguntas.length) {

      setTimeout(() => {
        mostrarPregunta();
      }, 1200);

    } else {

      mensaje.textContent =
        "🎉¡Bienvenido Samu❤️!";
        setTimeout(() => {
            window.location.href = "calendario.html";       
        }, 2000);
    }
  } else {
    mensaje.textContent =
      "Mmmm... intenta de nuevo 👀";

    mensaje.style.color = "#ff8d80";
  }
}