/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const maxNum = [5, 7];
if (maxNum[0] > maxNum[1]) {
  console.log("Il numero più grande è", maxNum[0]);
} else {
  console.log("Il numero più gande è", maxNum[1]);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let num5 = 7;
if (num5 !== 5) {
  console.log("not equal");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let divFor5 = 10;

if (divFor5 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let number1 = 4;
let number2 = 4;
if (
  number1 === 8 ||
  number2 === 8 ||
  number1 + number2 === 8 ||
  number1 - number2 === 8 ||
  number2 - number1 === 8
) {
  console.log(true);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let shoppingValue = 50;
let shoppinCost = 10;
let totalShoppingCart = 0;

if (shoppingValue > 50) {
  totalShoppingCart = shoppingValue;
} else {
  totalShoppingCart = shoppingValue + shoppinCost;
}
console.log(totalShoppingCart);

shoppingValue = 70;

if (shoppingValue > 50) {
  totalShoppingCart = shoppingValue;
} else {
  totalShoppingCart = shoppingValue + shoppinCost;
}
console.log(totalShoppingCart);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
if (shoppingValue > 50) {
  totalShoppingCart = shoppingValue;
} else {
  totalShoppingCart = shoppingValue + shoppinCost;
}

totalShoppingCart = totalShoppingCart - (totalShoppingCart * 20) / 100;
console.log(totalShoppingCart);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let num1 = 5;
let num2 = 7;
let num3 = 10;
if (num1 > num2 && num2 > num3) {
  console.log(num1, num2, num3);
} else if (num2 > num1 && num1 > num3) {
  console.log(num2, num1, num3);
} else if (num2 > num3 && num3 > num1) {
  console.log(num2, num3, num1);
} else if (num3 > num2 && num2 > num1) {
  console.log(num3, num2, num1);
} else {
  console.log(num1, num3, num2);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let undefinedValue = "Nome";
console.log(typeof undefinedValue);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let evenOrOdd = 65;
if (evenOrOdd % 2 === 0) {
  console.log("il dato fornito è pari");
} else {
  console.log("il dato fornito è dispari");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */
let val = 7;
if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Meno di 10");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me.city);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me.lastName);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me.skills[me.skills.length - 1]);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const numeri = [];
numeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numeri);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numeri.splice(9, 1, 100);
console.log(numeri[numeri.length - 1]);
/* SCRIVI QUI LA TUA RISPOSTA */
