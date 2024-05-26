//tested: WORKING
function updatePlaytime(min, sec){
    divmin = document.getElementById('playtime_min');
    divsec = document.getElementById('playtime_sec');
    divmin.innerHTML = min;
    divsec.innerHTML = sec;
}