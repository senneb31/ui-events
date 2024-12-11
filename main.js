/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// Stap 2: addEventListener
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)

//Frontend
let bewegenLR = document.querySelector('a:nth-of-type(1)')

bewegenLR.addEventListener('click', Frontend)

function Frontend(){
  console.log('het werkt')

  bewegenLR.classList.toggle('bewegen')
}


//Design
let bewegenLinks = document.querySelector('a:nth-of-type(2)')

bewegenLinks.addEventListener('click', Design)

function Design(){
  console.log('het werkt')
  
  bewegenLinks.classList.toggle('bewegenRL')
}



//&
let vergroot = document.querySelector('a:nth-of-type(3)')

vergroot.addEventListener('click', And)

function And(){
  console.log('het werkt')

  vergroot.classList.toggle('vergroten')
}


//Development
let omhoog = document.querySelector('a:nth-of-type(4)')

omhoog.addEventListener('click', Development)

function Development(){
  console.log('het werkt')

  omhoog.classList.toggle('springen')
}

//Sprint 5
let omlaag = document.querySelector('a:nth-of-type(5)')

omlaag.addEventListener('click', Sprint5)

function Sprint5(){
  console.log('het werkt')

  omlaag.classList.toggle('bukken')
}

//Fix
let linksdraai = document.querySelector('a:nth-of-type(6)')

linksdraai.addEventListener('click', Fix)

function Fix(){
  console.log('het werkt')

  linksdraai.classList.toggle('linksdraaien')
}

//The
let rechtsom = document.querySelector('a:nth-of-type(7)')

rechtsom.addEventListener('click', The)

function The(){
  console.log('het werkt')

  rechtsom.classList.toggle('rechtsomdraai')
}

//Flow
let bibberLink = document.querySelector('a:nth-of-type(8)')

bibberLink.addEventListener('click', Flow)


function Flow() {
  console.log('het werkt')

  bibberLink.classList.toggle('bibberen')
}

//User
//Interface
//Events
let bibber = document.querySelector('a:nth-of-type(11)')

bibber.addEventListener('click', Events)

function Events(){
  console.log('het werkt')

  bibber.classList.toggle('bibberverticaal')
}
//User Flow
let verklein = document.querySelector('a:nth-of-type(13)')

verklein.addEventListener('click', UserFlow)

function UserFlow() {
  console.log('het werkt')

  verklein.classList.toggle('verkleinen')
}
//Wireflow
//Feedback
//Feedforward
//Labels
//States
//Navigation
//Code



