/*Lag en updateView()-funksjon som lager 25 sirkler ved hjelp av 25 DIV-er med en bakrunnsfarge du velger selv, 
og en sirkulær ramme (border-radius: 50%). Sett bredde og høyde til noe passende. 
Vis dem i 5 rader a 5 sirkler. Lag en egen css class for dette, kall den for eksempel "lamp". 

Lag en css class "lightOn" med gul farge. 
Lag en kontroller-funksjon som endrer en variabel selectedLampIndex i modellen til et tilfeldig tall under 25 og så kaller updateView(). 
Endre den slik at riktig lampe lyser opp. Sørg for å kalle kontroller-funksjonen når siden laster. 

Legg til en onclick kun på den knappen som lyser - og koble den til en kontroller-funksjonen du lagde i forrige punkt. 

Forsøk å måle og vise tiden det tok fra en lampe lyste opp til brukeren trykket på den. 
Her er noen hint, men finn ut selv hvor i koden du legger dette:
var startTime = new Date().getTime();
var finishTime = new Date().getTime();
var spentMilliseconds = Math.floor(finishTime - startTime);
var spentSeconds = spentMilliseconds / 1000;*/



function getRandomNumber(){
    return Math.floor(Math.random()*25)+1
}

function changeLampIndex(){
    selectedLampIndex = getRandomNumber()
}

function removeShadow(){
    document.getElementById(`${selectedLampIndex}`).style.boxShadow = " -1px -1px black";
}

function startTimer(){
    startTime = new Date().getTime();
}

function getTime(){
    finishTime = new Date().getTime();
    spentMilliseconds = Math.floor(finishTime - startTime);
    spentSeconds = spentMilliseconds / 1000;
    addTimeOutput()
}

function addTimeOutput(){
    times.push(spentSeconds)
}
updateView()