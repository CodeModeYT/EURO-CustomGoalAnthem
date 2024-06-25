const socket = new WebSocket('wss://localhost:8765');

let previousScores = {};
let initialLoad = sessionStorage.getItem('initialLoad') === null;  // Check if initialLoad is set in sessionStorage

socket.onopen = function(event) {
    console.log('WebSocket connection established.');
};

socket.onmessage = function(event) {
    console.log('Message received:', event.data);  // Debug print
    const message = JSON.parse(event.data);

    // Check if the message type is 'score_update'
    if (message.type === 'score_update') {
        const scores = message.data;

        for (const team in scores) {
            if (scores.hasOwnProperty(team)) {
                const currentScore = scores[team];
                const previousScore = previousScores[team] || 0;
                if (initialLoad) {
                    if (team === "Germany") {
                        updateScoreGER(currentScore, false);
                    } else {
                        updateScoreOPP(currentScore, false);
                    }
                } else {
                    // If Germany scores:
                    if (currentScore !== previousScore && team === "Germany") {
                        console.log(`Germany scored! Previous score: ${previousScore}, Current score: ${currentScore}`);
                        playHymne();
                        updateScoreGER(currentScore);
                        celebrate(10000);
                        // If the device is a phone, start the alternative way of playing the anthem for phones
                        if (isPhone()){
                            showPopup();
                            disableScroll();
                        }
                    }
                    // If the opponent scores:
                    else if (currentScore !== previousScore && team !== "Germany") {
                        updateScoreOPP(currentScore);
                    }
                }

                // Update the previous score
                previousScores[team] = currentScore;
            }
        }

        // Set initialLoad to false after processing the initial data and store in sessionStorage
        if (initialLoad) {
            sessionStorage.setItem('initialLoad', 'true');
            initialLoad = false;
        }
    }

    if (message.type === 'playtime_update') {
        // Extract the 'short' value from the message data
        const playtimeData = message.data;
        const short = playtimeData.short;
        updatePlaytime(short);
        console.log(`Playtime updated: ${short}`);
    } else {
        console.log('Unknown message type:', message.type);
    }
};

socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};
