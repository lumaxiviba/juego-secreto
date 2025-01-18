let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos != 1 ? "veces" : "vez"}.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // Cuando el usuario no acierta
    if (numeroDeUsuario < numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es mayor.");
    } else {
      asignarTextoElemento("p", "El número secreto es menor.");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Bienvenido al juego del número secreto");
  asignarTextoElemento("p", `Elige un número entre el 1 y el ${numeroMaximo}.`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los elementos");
  } else {
    // Si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function reiniciarJuego() {
  //Limpiar Caja
  limpiarCaja();
  //Declarar intervalo de números
  //Reiniciar intentos
  //Generar nuevo número secreto
  condicionesIniciales();
  // Deshabilitar Botón de reinicio
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
