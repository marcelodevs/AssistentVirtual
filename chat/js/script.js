import { getAnswer } from "../ia/ia_logic";

document.addEventListener('DOMContentLoaded', function () {
  const messageForm = document.getElementById('messageForm');
  const messageInput = document.getElementById('messageInput');
  const chatMessages = document.getElementById('chatMessages');

  function addMessageToChat(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<strong>Você:</strong> ${message}`;
    chatMessages.appendChild(messageDiv);

    const response = getAnswer(message); // Verifica a resposta com base na mensagem
    const responseDiv = document.createElement('div');
    responseDiv.classList.add('message');
    responseDiv.innerHTML = `<strong>Bot:</strong> ${response}`;
    chatMessages.appendChild(responseDiv);

    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  messageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const messageText = messageInput.value.trim();

    if (messageText !== '')
    {
      addMessageToChat(messageText);
    }
  });
});
