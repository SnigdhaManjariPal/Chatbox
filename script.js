// Retrieve necessary elements
var chatbox = document.getElementById('chatbox');
var messageInput = document.getElementById('message');
var sendButton = document.getElementById('send-btn');

// Add event listener to send button
sendButton.addEventListener('click', sendMessage);

// Function to send a message
function sendMessage() {
    var message = messageInput.value;
    if (message) {
        var newMessage = document.createElement('p');
        newMessage.textContent = 'You: ' + message;
        chatbox.appendChild(newMessage);
        messageInput.value = '';
    }
}

// Function to receive a message
function receiveMessage(message) {
    var newMessage = document.createElement('p');
    newMessage.textContent = 'Bot: ' + message;
    chatbox.appendChild(newMessage);
}

// Example usage: receiveMessage('Hello! How can I assist you?');
