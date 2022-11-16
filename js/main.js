// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.


// prima di tutto definisco il container

const myContainer = document.getElementById("container");

console.log(myContainer);


// Creazione della griglia 10x10 tramite ciclo for e funzione
// Inizio dal ciclo for

for (let i = 1; i <= 100; i++ ){

    // creo l'elemento per la funzione
    let nuovoElemento = createBoxGrid(i);


    nuovoElemento.addEventListener("click",
    
        function() {
            // toggle mi permette di aggiungere o togliere l'elemento aggiunto ad ogni click
            nuovoElemento.classList.toggle("clicked");
        }

    )


    myContainer.appendChild(nuovoElemento);
   



}


// Funzione

function createBoxGrid (index){

    // Creare un elemento div e la sua classe relativa
    const elementBox = document.createElement("div");

    elementBox.classList.add("celle");
    // console.log(elementBox);

    // Creo la numerazione progressiva delle celle
    elementBox.innerHTML = index;


    // ritornarlo
    return elementBox;

}