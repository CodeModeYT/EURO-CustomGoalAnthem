// tested: WORKING
function updateScoreGER(newscore){
    celeb = document.getElementById("celebration");
    scoreboard = document.getElementById("score_ger");
    scoreboard.innerHTML = newscore;
    blink_ltd('score_ger', 250, 10000);
}

function updateScoreOPP(newscore){
    scoreboard = document.getElementById("score_opp");
    scoreboard.innerHTML = newscore;
    blink_ltd('score_opp', 250, 10000);
}
