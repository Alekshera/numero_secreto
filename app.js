let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximoIntentos = 3;
  while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Me indicas un número del 1 al 10, por favor");
  console.log(numeroUsuario);
  if (numeroSecreto == numeroUsuario) {
    alert(`Felicitaciones, ¡has adivinado! el número es el ${numeroUsuario}. Lo has logrado despues de ${intentos} ${intentos == 1 ? "intento" : "intentos"}. `);
  }else {
      if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor que " + numeroUsuario);
      }else {
      alert("El número secreto es mayor que " + numeroUsuario);
      }
      //intentos = intentos + 1;
      //intentos++;
      intentos += 1;
      //palabraVeces = "veces";
      if (intentos > maximoIntentos) {
    alert(`El juego ha terminado, has gastado tus ${maximoIntentos} intentos. El número era ${numeroSecreto}`);
    break;
    }
  }
}