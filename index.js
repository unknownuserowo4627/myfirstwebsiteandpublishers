let randomNum;
let maxi = 10;
let mini = 1;


document.getElementById("Button").onclick = function() {
    let maxiInput = document.getElementById("submissionsMaxi").value;
    maxi = Number(maxiInput);
    let miniInput = document.getElementById("submissionsMini").value;
    mini = Number(miniInput);
    randomNum = Math.floor(Math.random() * maxi) + mini;
    document.getElementById("Title").textContent = randomNum;

}