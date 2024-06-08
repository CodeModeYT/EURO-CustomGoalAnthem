const socket = new WebSocket('ws://localhost:8765');

let previousScores = {
};

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
                //If Germany sores:
                if (currentScore !== previousScore && team === "Germany") {
                    console.log(`Germany scored! Previous score: ${previousScore}, Current score: ${currentScore}`);
                    playHymne()
                    updateScoreGER(currentScore);
                    celebrate(10000);
                }
                //If the opponent scores:
                else if (currentScore !== previousScore && team !== "Germany"){
                    updateScoreOPP(currentScore);
                }

                // Update the previous score
                previousScores[team] = currentScore;
            }
        }
    } 
    if (message.type === 'playtime_update') {
        // Extract the 'long' value from the message data
        const playtimeData = message.data;
        const short = playtimeData.short;
        updatePlaytime(short)
        console.log(`Playtime updated: ${short}`);
    }
    else {
        console.log('Unknown message type:', message.type);
    }
};

socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};
