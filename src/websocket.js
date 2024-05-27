const socket = new WebSocket('ws://localhost:8765');

socket.onopen = function(event) {
    console.log('WebSocket connection established.');
};

socket.onmessage = function(event) {
    console.log('Received notification:', event.data);
};

socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};
