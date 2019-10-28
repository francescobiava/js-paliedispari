// Funzione per capire se la parola è palindroma

// variabili
var userWord, output;

// inserimento parola da utente
userWord = prompt('Inserisci una parola');

// function
output = palindrome(userWord);

// output
console.log(output);

// dichiarazione function
function palindrome (word) {
  var reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    return 'La parola è palindroma';
  } else {
    return 'La parola non è palindroma';
  }
}