/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let string = "Marco";
console.log(string);
/* Sono come parole o frasi, racchiuse tra virgolette. 
Esempio Il mio nome è Marco " ("Marco" è una stringa)
*/
let number = 100;
console.log(number);
//Sono come i numeri che si usano per contare o fare calcoli che possono essere interi o decimali//
let booleans = "true";
console.log(booleans);
// Sono parole che esprimono una verità //
let box = "null";
console.log(box);
// Significa che la variale non ha nessun valore//
let closet;
console.log(closet);
// E' una variabile dove non gli è stato assegnato nessun valore//
let age = 30;
let year = "1";
console.log(age + year);
//La variabile può contere parole, numeri //
//
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let myName = "Gaetano";
console.log(myName);
*/
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 10;
let number2 = 20;
console.log(number1 + number2);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = "Miscio";
console.log(myName);
//Uncaught SyntaxError: Identifier 'myName' has already been declared (at D1.js:65:7)//
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myNumber = "4";
console.log(myNumber - x);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
//EXTRA//
console.log("name1 è uguale a name2 in minuscolo: " + (name1.toLowerCase === name2.toLowerCase));
