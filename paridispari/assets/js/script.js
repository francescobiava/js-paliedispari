// L'utente sceglie pari o dispari e un numero da 1 a 5. Generiamo un numero random da 1 a 5 per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// variabili
var userNum, userChoice, pcNum, output;

// numero inserito da utente
userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));

// scelta pari o dispari
userChoice = prompt('Scegli pari o dispari');

// trasformo tutto minuscolo
userChoice = userChoice.toLowerCase();

// numero random pc
pcNum = Math.floor(Math.random() * 5) + 1;

// function
output = pariDispari (userNum, pcNum, userChoice);

// output
console.log('Numero utente = ', userNum);
console.log('Numero pc = ', pcNum);
console.log('Sommma = ', (userNum + pcNum));
console.log('Scelta = ', userChoice);
console.log(output);

// dichiarazione function
function pariDispari (num1, num2, choice) {
  var tot = num1 + num2;
  if (tot % 2 == 0) {
    var result = 'pari';
  } else {
    var result = 'dispari';
  }
  if (choice === result) {
    return 'Hai vinto!';
  } else {
    return 'Hai perso!';
  }
}