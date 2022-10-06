//Chiedi all'utente il suo nome
const userName = prompt("Inserisci Nome");
//Chiedi all'utente il suo cognome
const userLastName = prompt("Inserisci Cognome");
//Chiedi all'utente il suo colore preferito
const userColor = prompt("Inserisci Colore preferito");
//Inserisci l'anno corrente
const currentYear = 2022;
//Genera la password per l'utente
const password = userName + userLastName + userColor + currentYear ;
document.getElementById("pw").innerHTML = password;
