// tested: WORKING
function updateScoreGER(newscore){
    celeb = document.getElementById("celebration");
    scoreboard = document.getElementById("score_ger");
    CloseEvent.style.display = 'block';
    scoreboard.innerHTML = newscore;
    blink('score_ger', 250);
    playHymnne();
}

function updateScoreOPP(newscore){
    scoreboard = document.getElementById("score_opp");
    scoreboard.innerHTML = newscore;
    blink('score_opp', 250);
}
