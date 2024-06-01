function celebrate(duration){
    document.getElementById('celebration').style.display = "block";
    blink_ltd('celebration', 250, duration);
    document.body.style.background = "linear-gradient(-45deg, rgba(0, 0, 0), red, yellow)";
    document.body.style.backgroundSize = "1000% 1000%";
    setTimeout(function(){
        document.body.style.background = "linear-gradient(-45deg, rgba(0, 157, 255, 0.774), rgb(0, 225, 255), rgb(87, 90, 255))";
        document.body.style.backgroundSize = "1000% 1000%";
        document.getElementById('celebration').style.display = "none";
    }, duration*2);
}