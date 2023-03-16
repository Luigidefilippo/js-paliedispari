// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiediamo all'utente di scegliere tra pari o dispari
let sceltaUtente = prompt("Scegli pari o dispari");

// Chiediamo all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Generiamo un numero random da 1 a 5 per il computer
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numeroComputer = numeroRandom(1, 5);

// Sommiamo i due numeri
let somma = numeroUtente + numeroComputer;

// Stabiliamo se la somma dei due numeri è pari o dispari
function isPari(num) {
  return num % 2 === 0;
}
let sommaPari = isPari(somma);

// Dichiarazione del vincitore
if ((sommaPari && sceltaUtente === "pari") || (!sommaPari && sceltaUtente === "dispari")) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!");
}