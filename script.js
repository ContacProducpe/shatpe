// Simulación de una base de datos de usuarios anónimos
let currentUserCount = sessionStorage.getItem('currentUserCount');
if (!currentUserCount) {
    currentUserCount = 0;
}

// Asignar un nombre de usuario único para la sesión actual
let userName = sessionStorage.getItem('userName');
if (!userName) {
    currentUserCount++;
    userName = `Anónimo ${currentUserCount}`;
    sessionStorage.setItem('userName', userName);
    sessionStorage.setItem('currentUserCount', currentUserCount);
}

document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();

    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${userName}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        chatInput.value = ''; // Clear the input field
    }
}

document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
