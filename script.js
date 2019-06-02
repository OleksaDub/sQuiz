let score = 0;
let point = 1;
let q;
const scoreboard = document.getElementById("score");
scoreboard.innerText = score;


// return the value of the radio button that is checked
// return an empty string if none are checked, or
// there are no radio buttons
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

			return checkedButton;
		}
	}
	return "";
}

function refreshScoreBoard(checkedButton) {
    if(checkedButton == q["correct"]) {
        score += point;
        scoreboard.innerText = score;
    } else {
        scoreboard.innerText = "Looser!";
    }
    return;
}

const questions = [
    {
        quest: "What is this?",
        ans: [
            "Nothing","Something", "Not your business", "Who knows"
        ],
        correct: 2
    }];

const form = document.getElementById("radiobuttons");

function playGame() {
    q = questions[0];

    form.innerHTML += `<h3>${q["quest"]}</h3>`;
    for (let i = 0; i < q["ans"].length; i++) {
        form.innerHTML += `<input type="radio" name="question" value="${i}">${q["ans"][i]}<br>`;      
    }
    
    let answer = getCheckedValue(document.forms['questionForm'].elements['question']);
    //let answer = document.querySelector("input[name='question']:checked").val();    
    
}

playGame();