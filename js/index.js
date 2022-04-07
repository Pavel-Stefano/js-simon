// Descrizione:
// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer
//  di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto 
// precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.



                            // UTILITY
function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    }

                            //  VARIABILI GLOBALI

const numeriGenerati = [];
const numeriGeneratiElm = document.getElementById('numeri-generati');




//1) Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer


while(numeriGenerati.length < 5){
    let num = getRandomInt(1, 100);
    // console.log(num, 'numeri casuali');
    
    
    // controllare se non c'è il numero lo pusho!
    if(!numeriGenerati.includes(num)){
        numeriGenerati.push(num);
    }
}

numeriGeneratiElm.innerHTML = numeriGenerati.join(' - ');   // stampare a schermo i numeri random


// 3) confronto i numeri 
function confrontaNumeri(numeriUtente){
    // console.log(numeriUtente);

    const numeriAzzeccati = [];

    for(let i = 0; i <= numeriUtente.length; i++){
        let num = numeriUtente[i];          // variabile temporanea valida solo nel for

// 4) scrivere in pagina i risultati

        if(numeriGenerati.includes(num)){
            numeriAzzeccati.push(num);
        }
        if(numeriGenerati.length === numeriAzzeccati.length){
            alert('hai vinto! hai indovinato tuti i numeri');  // mi da 2 alert consegutivi alla vincita
            console.log(numeriAzzeccati, 'numeri azzeccati')
        }
        else {
            
            const numeriUtenteElm = document.getElementById('numeri-utente');
            const numeriIndovinatiElm = document.getElementById('numeri-corrispondenti');
            numeriGeneratiElm.innerHTML = `Numeri iniziali: ${numeriGenerati.join(' - ')} `;
            numeriUtenteElm.innerHTML = `Numeri che hai inserito: ${numeriUtente.join(' - ')}`;
            numeriIndovinatiElm.innerHTML = `Numeri indovinati: ${numeriAzzeccati.join(' - ')}`;  // mi stampa solo 4 numeri invece di 5
        }
    }
}

// 2) Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto 

const timer = setTimeout(() => {
    numeriGeneratiElm.innerHTML = "";
    const numeriUtente = [];
    while(numeriUtente.length < 5){
        const num = parseInt( prompt("inserisci i numeri"));
        if(!numeriUtente.includes(num)){
            numeriUtente.push(num);
        }
    }
    // console.log(numeriUtente);
    confrontaNumeri(numeriUtente);
}, 10000);


setTimeout(() =>{numeriGeneratiElm.innerHTML = "";}, 9000); // tolgo i numeri da schermo



