// File to load the default values of the selector

function setSelectorValue(selectorId, value) {
    var selector = document.getElementById(selectorId);
    selector.value = value;
    var event = new Event('change');
    selector.dispatchEvent(event);
}

function loadDefault(){
    setSelectorValue('preset1', '/audio/MajorTom_stadium.mp3');
    setSelectorValue('preset2', '/audio/goalscream.mp3');

}
