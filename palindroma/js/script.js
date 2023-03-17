// Chiediamo all'utente di inserire una parola
let parola = prompt("Inserisci una parola");

// Funzione per verificare se la parola è palindroma
function isPalindroma(str) {
  // Rimuoviamo eventuali spazi e trasformiamo la stringa in minuscolo
  str = str.replace(/\s/g, "").toLowerCase();
  // Confrontiamo la stringa originale con la sua versione invertita
  return str === str.split("").reverse().join("");
}

// Verifichiamo se la parola è palindroma
if (isPalindroma(parola)) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}