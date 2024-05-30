function blink(elementClass, speed) {
    var blink_speed = speed;
    var t = setInterval(function() {
        var elements = document.getElementsByClassName(elementClass);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.visibility = (elements[i].style.visibility == 'hidden' ? '' : 'hidden');
        }
    }, blink_speed);
}
function blink_ltd(elementClass, speed, duration) {
    var blink_speed = speed;
    var t = setInterval(function() {
        var elements = document.getElementsByClassName(elementClass);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.visibility = (elements[i].style.visibility == 'hidden' ? '' : 'hidden');
        }
    }, blink_speed);
    
    setTimeout(function(){
        clearInterval(t); // Stop blinking after duration
        var element = document.getElementsByClassName(elementClass);
        for (var i = 0; i < element.length; i++) {
            element[i].style.visibility = 'visible';
        }
    }, duration);
}
