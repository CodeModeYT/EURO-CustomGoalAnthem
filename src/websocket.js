const socket = new WebSocket('ws://localhost:8765');

let previousScores = {
};

socket.onopen = function(event) {
    console.log('WebSocket connection established.');
};

socket.onmessage = function(event) {
    const message = JSON.parse(event.data);

    // Check if the message type is 'score_update'
    if (message.type === 'score_update') {
        const scores = message.data;

        for (const team in scores) {
            if (scores.hasOwnProperty(team)) {
                const currentScore = scores[team];
                const previousScore = previousScores[team] || 0; // Default to 0 if no previous score

                if (currentScore !== previousScore && team === "Fortuna Düsseldorf") {
                    console.log(`Germany scored! Previous score: ${previousScore}, Current score: ${currentScore}`);
                    playHymne("stadium");
                    updateScoreGER(currentScore);
                }

                // Update the previous score
                previousScores[team] = currentScore;
            }
        }
    } else {
        console.log('Unknown message type:', message.type);
    }
};

socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};
