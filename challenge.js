function gameloop() {



}

setinterval(gameloop, 50);

let score = 0;

//score goes up every second
function raiseScore() {
    score++;
    //let scoreDisplay = document.getElementById("scoreDisplay");
    //scoreDisplay.innerHTML = score; 
}setInterval(raiseScore, 1000);

function detectClick() {
    function detectClick(){
        console.log("clicked");
    }
}

canvas.addEventListener("click", detectClick);