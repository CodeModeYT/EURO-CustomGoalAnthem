var popup = document.getElementById("popup");

var span = document.getElementsByClassName("close")[0];

function showPopup() {
    popup.style.display = "block";
}

function hidePopup(){
    popup.style.display = "none";
}

span.onclick = function() {
  hidePopup();
}

