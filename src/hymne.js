var normal = document.getElementById("mt_normal");
var stadium = document.getElementById("mt_stadium");
var scream = document.getElementById("scream");
function playHymne(ver){
    scream.play()
    if(ver == "normal"){
        setTimeout(function(){
            normal.play();
        }, 2000);
    }
    else if(ver == "stadium"){
        stadium.play();
    }
}