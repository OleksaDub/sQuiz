const questions = [
    {
        quest: "What is this?",
        ans: [
            "Nothing","Something", "Not your business", "Who knows"
        ],
        correct: 2
    }];

const form = document.getElementById("questionForm");

function playGame() {
    let q = questions[0];

    form.innerHTML += `<h3>${q["quest"]}</h3>`;
    for (let i = 0; i < q["ans"].length; i++) {
        form.innerHTML += `<input type="radio" name="question" value="${i}">${q["ans"][i]}<br>`;      
    }

    form.innerHTML += `<input type="submit" value="Submit">`;
}

playGame();