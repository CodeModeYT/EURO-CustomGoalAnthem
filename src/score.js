// tested: WORKING
function updateScoreGER(newscore, blink_bool){
    celeb = document.getElementById("celebration");
    scoreboard = document.getElementById("score_ger");
    scoreboard.innerHTML = newscore;
    if(!blink_bool){
        return;
    }
    else {
        blink_ltd('score_ger', 250, 10000);
    } 
}

function updateScoreOPP(newscore, blink_bool){
    scoreboard = document.getElementById("score_opp");
    scoreboard.innerHTML = newscore;
    if(!blink_bool){
        return;
    }
    else {
        blink_ltd('score_opp', 250, 10000);
    } 
}
