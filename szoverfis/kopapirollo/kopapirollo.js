function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Vesztettel!";
    } else if (
        (playerSelection === "ko" && computerSelection === "ollo") ||
        (playerSelection === "papir" && computerSelection === "ko") ||
        (playerSelection === "ollo" && computerSelection === "papir")
    ) {
        return "nyertel! " ;
    } else {
        return "nyertel! ";
    }
}

function computerPlay() {
    const choices = ["ko", "papir", "ollo"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function handleChoice(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').textContent = `ellenfel: ${computerSelection}. ${result}`;
}

document.getElementById('ko').addEventListener('click', function() {
    handleChoice('ko');
});
document.getElementById('papir').addEventListener('click', function() {
    handleChoice('papir');
});
document.getElementById('ollo').addEventListener('click', function() {
    handleChoice('ollo');
});