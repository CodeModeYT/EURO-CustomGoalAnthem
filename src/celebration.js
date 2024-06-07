function celebrate(duration){
    const celebrationElement = document.getElementById('celebration');
    const settingsElement = document.getElementById('settings');
    const autoplaymsgElement = document.getElementById('autoplaymsg');
    const explanationElement = document.getElementById('explanation');
    // Save the original display styles
    const originalDisplayStyles = {
        celebration: celebrationElement.style.display,
        settings: settingsElement.style.display,
        autoplaymsg: autoplaymsgElement.style.display,
        explanation: explanationElement.style.display
    };
    document.getElementById('celebration').style.display = "block";
    document.getElementById('settings').style.display = "none";
    document.getElementById('autoplaymsg').style.display = "none";
    document.getElementById('explanation').style.display = "none";
    blink_ltd('celebration', 250, duration);
    document.body.style.background = "linear-gradient(-45deg, rgba(0, 0, 0), red, yellow)";
    document.body.style.backgroundSize = "1000% 1000%";
    setTimeout(function(){
        document.body.style.background = "linear-gradient(-45deg, rgba(0, 157, 255, 0.774), rgb(0, 225, 255), rgb(87, 90, 255))";
        document.body.style.backgroundSize = "1000% 1000%";
        document.getElementById('celebration').style.display = "none";
        celebrationElement.style.display = originalDisplayStyles.celebration;
        settingsElement.style.display = originalDisplayStyles.settings;
        autoplaymsgElement.style.display = originalDisplayStyles.autoplaymsg;
        explanationElement.style.display = originalDisplayStyles.explanation;
    }, duration*2);
}