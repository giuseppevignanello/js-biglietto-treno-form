// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).




// Salvo in una variabile il prezzo per kilometro

const pricePerKm = 0.21

// Creo due input per chiedere all'utente i km e l'età
// Creo un bottone a cui aggiungo un EventListener e lavoro nella sua funzione anonima
// salvo i dati inseriti dall'utente in due variabili e ne stampo in console i value 
const submitEl = document.getElementById("submit");
const resetEl = document.getElementById("reset");
const ticketElement = document.getElementById ("ticket")




submitEl.addEventListener("click",

    function () {

        //genero il biglietto 

      
        ticketElement.className = ("d-block")

        const usernameEl = document.getElementById("username").value;
        console.log(usernameEl, "username")

        const userKmEl = document.getElementById("userKm").value;
        console.log(userKmEl, "userKm");

        const userAgeEl = document.getElementById("userAge").value;
        console.log(userAgeEl, "userAge");

        //mostro il nome in pagina 

        document.getElementById("ticketUsername").innerHTML = usernameEl;

        // produco un numero di carrozza casuale 

        const carriage = Math.floor(Math.random() * (10 - 1) + 1);
        document.getElementById("ticketCarriage").innerHTML = carriage;

        // produco un numero cp

        const cpNumber = Math.floor(Math.random() * (999999 - 000001));
        document.getElementById("ticketCode").innerHTML = cpNumber;




        // moltiplico i chilometri dell'utente per il prezzo per kilometro e lo arrotondo con toFixed

        let userPrice = userKmEl * pricePerKm;

        userPrice = userPrice.toFixed(2);
        console.log(`€ ${userPrice}`)

        // verifico se l'utente ha diritto allo sconto 
        //se è minorenne calcolo il 20% di sconto e lo applico al suo prezzo, quindi lo arrotondo con toFixed e lo stampo in console
        if (userAgeEl === "minorenne") {
            const discount20 = userPrice * 0.2;
            userPrice = userPrice - discount20;
            userPrice = userPrice.toFixed(2);
            document.getElementById("ticketDiscount").innerHTML = "Biglietto Minori";
            console.log(`€ ${userPrice} dicountedPrice`);
            document.getElementById("ticketPrice").innerHTML = `€ ${userPrice}`;

            // altrimenti, se over 65 calcolo il 40% di sconto e lo applico al suo prezzo, quindi lo arrotondo con toFixed e lo stampo in console
        } else if (userAgeEl === "over65") {

            const discount40 = userPrice * 0.4;
            userPrice = userPrice - discount40;
            userPrice = userPrice.toFixed(2);
            document.getElementById("ticketDiscount").innerHTML = "Biglietto Over 65";
            console.log(`€${userPrice} discounted Price`);
            document.getElementById("ticketPrice").innerHTML = `€ ${userPrice}`;
        } else {
            document.getElementById("ticketDiscount").innerHTML = "Biglietto Standard";
            document.getElementById("ticketPrice").innerHTML = `€ ${userPrice}`;
        }



    }

)

//Aggiungo il bottone di reset 

 resetEl.addEventListener("click", 

 function () {
     document.getElementById("username").value = "";
     document.getElementById("userKm").value = "";
     document.getElementById("userAge").value = ""
 }

 )




// tools

// - const
// - console.log
// -* multiplication
// - / division
// if else
//inner.HTML
//addEventListener
//toFixed