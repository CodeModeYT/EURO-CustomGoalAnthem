function checkTimeDistance(date){
    const now = new Date();
    const targetDate = new Date(date);
    const diffInMillis = targetDate - now;
    const diffInSeconds = Math.floor(diffInMillis / 1000);
    return diffInSeconds;
  }
  
  // Check if the game already started --> if the user is allowed to see game.html
  function checkRedirect(date){
    const distance = checkTimeDistance(date);
    if (distance >= 0) {
      window.location.replace("/index.html");
    }
  }