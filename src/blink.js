function blink(elementClass, speed) {
    var blink_speed = speed;
    var t = setInterval(function() {
        var elements = document.getElementsByClassName(elementClass);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.visibility = (elements[i].style.visibility == 'hidden' ? '' : 'hidden');
        }
    }, blink_speed);
}