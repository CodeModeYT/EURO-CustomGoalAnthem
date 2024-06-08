var normal = document.getElementById("mt_normal");
var stadium = document.getElementById("mt_stadium");
var scream = document.getElementById("scream");

function playHymne(){
    let scream_switch = toggleGoalscream();
    let fx_switch = toggleStadiumEffect();
    if(scream_switch == true){
        scream.play()
        if(fx_switch == true){
            stadium.play();
        }
        else{
            setTimeout(function(){
                normal.play();
            }, 2000);
        }
    }
    else{
        if(fx_switch == true){
            stadium.play();
        }
        else{
            normal.play();
        }
    }
}