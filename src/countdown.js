var countDownDate = new Date("Jun 3, 2024 20:45:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('cd_days').innerHTML = days;
  document.getElementById('cd_hours').innerHTML = hours;
  document.getElementById('cd_minutes').innerHTML = minutes;
  document.getElementById('cd_seconds').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    window.location.replace("/game.html");
  }
}, 1000);