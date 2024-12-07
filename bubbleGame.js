var timer = 5
var score = 0
var num = 0

function increaseScore() {
    score += 10
    document.querySelector("#scoreValue").textContent = score
}

function setHitVal() {
    num = Math.floor(Math.random()*10)
    document.querySelector("#hitValue").textContent = num
}

function setTimer() {
    var timerInt = setInterval(function () {
        if(timer > 0) {
            timer--
            document.querySelector("#timerValue").textContent = timer
        }
        else {
            // alert("Time Up!")
            clearInterval(timerInt)
            document.querySelector("#panelBottom").innerHTML = `
                <div id="over">
                    <h1 class="pbtmTxt">Game Over!</h1>
                    <h2 class="pbtmTxt">Score = ${score}</h2>
                </div>
                `
            // document.querySelector("#scoreValue").textContent = 0
        }
    }, 1000)
}

function makeBubbles() {
    let bubbles = ""

    for(var i = 0; i < 64; i++) {
        var num = Math.floor(Math.random()*10)
        bubbles += `<div class="bubble">${num}</div>`
    }

    document.querySelector("#panelBottom").innerHTML = bubbles
}

document.querySelector("#panelBottom")
.addEventListener("click", function(dets) {
    var bubbleNum = Number(dets.target.textContent)
    if(num === bubbleNum) {
        increaseScore()
        setHitVal()
        makeBubbles()
    }
})

makeBubbles()
setTimer()
setHitVal()
// increaseScore()