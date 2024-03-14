

function createDiv(){
    changeLampIndex()
    let divs = '';
    for(i = 1; i <= 25; i++){
        if(i == selectedLampIndex){
            divs += `<div class="lamp lightOn" id=${i} onclick="getTime();updateView()"></div>`
        }else
        divs += `<div class="lamp" id=${i} onmousedown="removeShadow()"></div>`
    }
    return divs
}


function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="container">
        
        ${createDiv()}

       
    </div>
    <div id="timeOutput">
        <h2 id="header">Dine tider:</h2>

        <ul>${printTimes()}</ul>
    </div>
    `

    startTimer()
    
}

function printTimes(){
    let result = ``;
    for (let i = 0; i < times.length; i++) {
        result += `<li class="numbers">${times[i]}</li>`
    }
    return result
}