/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log("EX1");
const ex1area= function areacalculator(l1,l2){
    return (l1*l2);
};
let ex1a=9;
let ex1b=4;
let ex1sum=ex1area(ex1a,ex1b);
console.log("i numeri sono ", ex1a, " e " ,ex1b, "l'area è :",ex1sum);



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("EX2");
const ex2crazySum= function crazySum(l1,l2){
    if(l1===l2){
        return((l1+l2)*3);
    }else{
        return (l1+l2);
    }
};
let ex2a=5;
let ex2b=5;
let ex2result=ex2crazySum(ex2a,ex2b);
console.log("i numeri sono ",ex2a," e ",ex2b , " il risultato è: ",ex2result);



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


console.log("EX3");
const ex3crazyDiff= function crazyDiff(l1){
    if(l1<=19){
    return(19-l1);
    }else
    {
        return((l1-19)*3);
    }
}
let ex3a=29;
let ex3result=ex3crazyDiff(ex3a);
console.log("il numero fornito è ",ex3a, "il risultato è:" ,ex3result);


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("EX4");
const ex4boundary= function boundary(l1){
    switch(true){
        case (l1===400):
            return true;
            break;
        case((l1<=100)&&(20<=l1)):
            return true;
            break;
        default:
            return false;
            break;
    }

}
let ex4a=100;
let ex4result=ex4boundary(ex4a);
console.log("il numero fornito è ",ex4a, "il risultato è:" ,ex4result);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("EX 5");


const ex5epify=function epify(l1){
ex5firstcharacters=(l1.slice(0,7));
console.log("i primi 7 caratteri sono : ",ex5firstcharacters);
if(ex5firstcharacters=="EPICODE"){
    console.log("la stringa inizia con EPICODE, non verrà fatta alcuna operazione");

}else{
 l1="EPICODE"+l1;
 console.log("la stringa non inizia con EPICODE");
}
return l1 ;

}

const ex5a="sEPICODE ciao";
console.log("Il risultato finale è ",ex5epify(ex5a));




/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("EX 6");
const ex6check3and7= function check3and7(l1){
    if(l1>=0){
    
    if(((l1%3)===0 )||((l1%7)==0)){
        console.log("è un multiplo di 3 o di 7");
    }

    else{
        console.log("non è un multiplo di 3 o di 7")
    }

}
else{
    console.log("non hai inserito un numero positivo");
}
}
let ex6input=21;
ex6check3and7(ex6input);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("EX 7")
const ex7reverseString= function reverseString(l1){
let result="";
for(i=(l1.length);i>=0;i=i-1){
    result=result+l1.charAt(i);
}
console.log("risultato =",result);
}

const ex7input="Epicode";
console.log("stringa iniziale = ",ex7input);
ex7reverseString(ex7input);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/*console.log("EX 8"); // SERVE AIUTO
const ex8upperFirst=function upperFirst(l1){
    let firstletter=false;
    let result=l1[0].toUpperCase();
        for(i=0;i<l1.length;i++){
            if(firstletter==true){
            l1.charAt[i]=(l1[i].toUpperCase());
            firstletter=false;
            }
            if(l1[i]==" "){
            firstletter=true;
            }
        console.log("number i",i,"valore boleano",firstletter," il carattere è:",l1[i],);

}
console.log(l1);
}*/

console.log("EX 8"); // SERVE AIUTO
const ex8upperFirst=function upperFirst(l1){
    let firstletter=true;
    let result="";
 

  
        for(i=0;i<l1.length;i++){
            if(firstletter==true){
            result=(result+(l1[i].toUpperCase()));
            firstletter=false;
            }
            else{
                result=result+l1.charAt(i);
            }
            if(l1[i]==" "){
            firstletter=true;
            }
        

}
return result;
}


let ex8input="ciao mi chiamo shahruz vengo da siena"

console.log("Stringa iniziale : ",ex8input);
console.log("stringa finale   : " ,ex8upperFirst(ex8input));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("EX 9");
const ex9cutstring= function cutString(l1){
    let result="";
    for(i=0;(i<l1.length-1);i++){
        result=result+l1[i];
    }
    return result;
}

let ex9inputstring="Vediamo se funziona";
console.log("stringa originale: ",ex9inputstring);
console.log("stringa finale   : ",(ex9cutstring(ex9inputstring)));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("EX 10");
const ex10giveMeRandom= function(l1){
const arrayOfNumbers=[];
for(i=0;i<l1;i++){
    arrayOfNumbers[i]=Math.floor(Math.random() * 11);
}
return arrayOfNumbers;
}

let ex10number=9;
let ex10result=[];
ex10result=(ex10giveMeRandom(ex10number));
console.log(ex10result);