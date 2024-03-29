let isGameOn = true;
let score = 0;
let point = 1;
let q;

const questions = [
    {
        quest: "What is this?",
        ans: [
            "Nothing","Something", "Not your business", "Who knows"
        ],
        correct: 2
    },
    {
        quest: "What color is blood?",
        ans: [
            "Green","Red", "Blue", "Who knows"
        ],
        correct: 1
    },
    {
        quest: "How much is the fish?",
        ans: [
            "$19.90","$21.90", "Not your business", "Who knows"
        ],
        correct: 0
    }];

const scoreboard = document.getElementById("score");
const qFormBtn = document.getElementById("btn-question");
const start = document.getElementById("btn-start");
start.addEventListener("click", playGame);

const form = document.querySelector("form");

// return the value of the radio button that is checked
// return an empty string if none are checked, or
// there are no radio buttons
//https://www.somacon.com/p143.php

function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
            var checkedButton = radioObj[i].value;

            refreshScoreBoard(checkedButton);
            nextQuestion();
			return checkedButton;
		}
	}
	return "";
}

function chooseQuestion() {
    return Math.floor(Math.random() * questions.length)
}

function refreshScoreBoard(checkedButton) {
    if(checkedButton == q["correct"]) {
        score += point;
        scoreboard.innerText = score;
        setRedBkg();
    } else {
        scoreboard.innerText = "Looser!";
    }
    return;
}

function setRedBkg() {
    let html = document.querySelector("html");
    html.classList.toggle("red-bkg");
    setTimeout(function(){
        html.classList.toggle("red-bkg");
    }, 300);
}

const radioBtns = document.getElementById("radiobuttons");

function nextQuestion() {
    q = questions[chooseQuestion()];

    radioBtns.innerHTML = "";
    radioBtns.innerHTML += `<h3>${q["quest"]}</h3>`;
    for (let i = 0; i < q["ans"].length; i++) {
        radioBtns.innerHTML += `<input type="radio" name="question" value="${i}">${q["ans"][i]} <br>`;      
    }
    qFormBtn.style.display = "block";
}

function playGame() {
    score = 0
    scoreboard.innerText = score;
    nextQuestion();
}

// User's Question Form

const addQuestion = document.getElementById("btn-addQuestion"),
      modal       = document.getElementById("modal"),
      modalClose  = document.getElementById("modal-close"),
      userQuestion = document.getElementById("btn-userQuestion");

addQuestion.addEventListener("click", function(){
    modal.style.display = "block";
})

modalClose.addEventListener("click", function(){
    modal.style.display = "none";
});

userQuestion.addEventListener("click", function(){
    let usQ = document.getElementById("usersQuestion").value;
    console.log(usQ);
    let info = document.getElementById("info");
    info.innerText = '';
    let usAnswers = document.getElementsByClassName("user-answer");
    let answers = [];
    for (let i = 0; i < usAnswers.length; i++) {
        if(!usAnswers[i].value){
            info.innerText = "You must fill all fields!";
            return;
        }
        answers.push(usAnswers[i].value);   
        console.log(usAnswers[i].value);
    }
    //if(!usAnswers.every()) console.log("!!!!WARNING!!!!!!!!!");

    let rightAns = document.getElementById("right-answer");
    var strUser = rightAns.options[rightAns.selectedIndex].value;
    if(strUser){
        console.log(strUser);
    } else {
        console.log("Warning!")
    }
    //modal.style.display = "none";
});

    
