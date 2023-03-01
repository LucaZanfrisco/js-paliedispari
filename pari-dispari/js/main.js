'use strict';

// Funzione che genera un numero random 
function randomNumber(min, max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}
// Funzione che somma due numeri
function sommaNumeri(num1,num2){
    const somma = num1 + num2;
    return somma;
}
// Funzione che controlla se la somma è pari o dispari
function pariDisapri(somma){
    let check = 'dispari';
    if(somma % 2 === 0){
        check = 'pari';
    }
    return check;
}

// Scelta da parte dell'utente di pari o dispari
let scelta;
// do{
    scelta = prompt("Scegliere tra 'pari' o 'dispari'"); 
// }while(scelta !== 'pari' || scelta !== 'dispari');

// Inserimento e controllo di un numero compreso tra 1 e 5
let numeroUtente = 0;
do{
     numeroUtente = Number(prompt('Inserire un numero tra 1 a 5'));
}while(numeroUtente < 1 || numeroUtente > 5);

// Stampa della scelta dell'utente
console.log("Scelta dell'utente: " + scelta, numeroUtente);

// Chiamata alla funzione che genera un numero random
const numeroCPU = randomNumber(1,5);
// Stampa del numero generato randomicamente
console.log("Numero random del computer: " + numeroCPU);

// Chiamata alla funzione che somma due numeri
const sommaTotale = sommaNumeri(numeroUtente,numeroCPU);
// Stampa della somma totale
console.log("Somma: " + sommaTotale);

// Chiamata alla funzione che controlla se la somma è pari o dispari
const check = pariDisapri(sommaTotale);

// Controllo della scelta dell'utente
if(scelta === check){
    console.log('Utente Vince');
}else {
    console.log('CPU Vince');
}