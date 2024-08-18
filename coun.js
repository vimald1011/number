// Declare global variables
var ramNumber1;
var ramNumber2;
var ans;
var isQuestionGenerating = false; // New variable to track question generation state
let numm = document.getElementById("queResBtn");
let nummm = document.getElementById("ansSubBtn");
let nu = document.getElementById("inputBox");
let queBtn = document.getElementById("queBtn");
let count = 11;

// Disable buttons on page load
numm.disabled = true;
nummm.disabled = true;
nu.disabled = true;

document.querySelector("#ansSubBtn").addEventListener("click", ansOption);
queBtn.addEventListener("click", toggleQuestionGeneration);
numm.addEventListener("click", ansOption);
nummm.addEventListener("click", ansOption);
nu.addEventListener("click", ansOption);

function toggleQuestionGeneration() {
    if (isQuestionGenerating) {
        stopQuestionGeneration();
    } else {
        startQuestionGeneration();
    }
}

function startQuestionGeneration() {
    isQuestionGenerating = true;
    queBtn.innerHTML = "Stop Generating Question";

    geneRateQue();
}

function stopQuestionGeneration() {
    isQuestionGenerating = false;
    queBtn.innerHTML = "Generate Question";
    numm.disabled = true;
    nummm.disabled = true;
    nu.disabled = true;
    count = 1;
}

function ramNum() {
    // Assign random values to global variables
    ramNumber1 = Math.floor((Math.random() * 5) + 1);
    ramNumber2 = Math.floor(Math.random() * 6);
    ans = ramNumber1 + ramNumber2;
}

function geneRateQue() {
    ramNum(); // Call ramNum to update ramNumber1 and ramNumber2
    const res = document.querySelector(".resShow");
    res.innerHTML = "there are result";
    res.style.color = "";
    let firstspan = document.getElementById("firstN");
    firstspan.innerHTML = ramNumber1;
    let secondspan = document.getElementById("secoundN");
    secondspan.innerHTML = ramNumber2;
    let plushpara = document.getElementById("plush");
    plushpara.innerHTML = "+";
    document.getElementById('inputBox').value = "";

    // my code goes here
    numm.innerHTML = "";
    nummm.innerHTML = "";
    nu.innerHTML = "";
    numm.style.color = "black";
    nummm.style.color = "black";
    nu.style.color = "black";

    setTimeout(() => {
        if (isQuestionGenerating) {
            optionGenerater();
            numm.disabled = false;
            nummm.disabled = false;
            nu.disabled = false;
            count = 11;
            countDown();
        }
    }, 2000);
}

var score = 0;

function ansOption() {
    if (this.innerHTML == ans) {
        this.style.color = "green";
        console.log("matching");
        score += 10;
        numm.disabled = true;
        nummm.disabled = true;
        nu.disabled = true;
        count = 1;
        const res = document.querySelector(".resShow");
        res.innerHTML = "Correct! 🤜";
        res.style.color = "#017108";
        setTimeout(() => {
            if (isQuestionGenerating) {
                geneRateQue();
            }
        }, 2000);
        let correctAudio = new Audio("./music/correctAns.mp3");
        correctAudio.play();
        if (score == 20) {
            let fiftyAudio = new Audio("./music/fiftyComplete.mp3");
            setTimeout(() => {
                fiftyAudio.play();
            }, 2000);
        }
    }
    else {
        this.style.color = "red";
        console.log("not matching");
        score -= 1;
        const res = document.querySelector(".resShow");
        res.innerHTML = "Incorrect! 😔";
        res.style.color = "#A7031A";
        let incAudio = new Audio("./music/incorrectAns.mp3");
        incAudio.play();
    }

    document.getElementById("score").innerHTML = score;
}

function optionGenerater() {
    let array1 = [ans];
    let array2 = [];
    var n = 4;
    if (n == 0) {
        console.log(null);
    }
    do {
        const option1 = Math.floor((Math.random() * 9) + 2);
        const option2 = Math.floor(Math.random() * 3);
        if (!array1.includes(option1) && !array2.includes(option2)) {
            array1.push(option1);
            array2.push(option2)
        }
    } while (array1.length < n && array2.length < n);
    console.log(array1);
    console.log(array2);

    var a = array1[array2[0]];
    var b = array1[array2[1]];
    var c = array1[array2[2]];

    numm.innerHTML = a;
    nummm.innerHTML = b;
    nu.innerHTML = c;
};

function countDown() {
    const timer = setInterval(function () {
        count--;
        console.log(count);
        if (count != 0) {
            if (count > 4) {
                document.getElementById("timing").style.color = "";
                document.getElementById("timing").innerHTML = count;
            } else {
                document.getElementById("timing").style.color = "red";
                document.getElementById("timing").innerHTML = count;
            }
        } else {
            clearInterval(timer);
            console.log("Time's up!");
            document.getElementById("timing").innerHTML = "";
        };
    }, 1000);
}
