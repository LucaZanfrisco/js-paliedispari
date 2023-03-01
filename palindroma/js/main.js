'use strict';

// Funzione che inverte la parola inserita dall'utente;
function invertiParola(text){
    let parolaInvertita = '';
    for(let i = text.length - 1; i >= 0; i--){
        parolaInvertita += text[i];
    }
    return parolaInvertita;
}

// Funzione che controlla se la parola inserita sia uguale a quella invertita
function palindroma(text, textReverse){
    let messaggio = 'La parola inserita non è palindroma';
    if(text === textReverse){
        messaggio = 'La parola inserita è palindroma';
    }
    return messaggio;
}

// Inserimento tramite prompt di una parola con controllo che sia effettivamente una parola
let parola;
do{
    parola = prompt('Inserira una parola');
}while(!isNaN(parola));

// Richiamo alla funzione per invertire la parola inserita
const parolaInvertita = invertiParola(parola);

// Stampa a video delle parole
console.log('Parola originale: ' + parola);
console.log('Parola invertita: ' + parolaInvertita);

// Chiamata alla funzione per controllare se la parola è palindroma
const messaggio = palindroma(parola,parolaInvertita); 

// Stampa del messaggio
console.log(messaggio);