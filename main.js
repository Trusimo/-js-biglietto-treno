/*
    Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
    Formula per il calcolo: km * 0.21 = prezzoBiglietto
    Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
    eta: 50
    km: 120
    prezzzo: 24,50
*/    

var chilometri = prompt("Quanti chilometri devi percorrere?");
var eta = prompt ("Quanti anni hai?");

if (eta < 17) {
    var prezzo = 0.168 * (chilometri);
} else if (eta > 65) {
    var prezzo = 0.126 * (chilometri);
} else {
    var prezzo = 0.21 * (chilometri);
}

document.getElementById("userage").innerHTML = (eta);
document.getElementById("userkm").innerHTML = (chilometri);
document.getElementById("userprice").innerHTML = (prezzo);