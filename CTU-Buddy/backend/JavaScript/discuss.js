document.addEventListener("DOMContentLoaded", function () {
  const messageTextArea = document.getElementById("message");
  const messageDisplay = document.getElementById("message-display");
  const questionButton = document.getElementById("question-button");
  const commentButton = document.getElementById("comment-button");
  const usernameForm = document.getElementById("username-form");
  const usernameDisplay = document.getElementById("username-display");
  const changeUsernameButton = document.getElementById("change-username-button");
  const changeUsernameForm = document.getElementById("change-username-form");
  const changeUsernameInput = document.getElementById("change-username-input");

  let username = ''; // Variable to store the username

  // Event listener to set the username when the form is submitted
  usernameForm.addEventListener('submit', function (e) {
      e.preventDefault();
      username = document.getElementById("username").value;
      usernameDisplay.textContent = username;
  });

  // Event listener for the "Question" button
  questionButton.addEventListener("click", function () {
      sendMessage("question-message");
  });

  // Event listener for the "Comment" button
  commentButton.addEventListener("click", function () {
      sendMessage("comment-message");
  });

  // Event listener for changing the username
  changeUsernameButton.addEventListener("click", function () {
      // Display a form or modal to change the username
      // Here, we use a simple prompt for demonstration purposes
      const newUsername = prompt("Enter a new username:");
      if (newUsername !== null && newUsername.trim() !== '') {
          username = newUsername;
          usernameDisplay.textContent = username;
      }
  });

  function sendMessage(messageClass) {
      const messageText = messageTextArea.value;

      if (messageText.trim() === '') {
          return; // Don't send empty messages
      }

      // Create a new message element
      const messageElement = document.createElement("div");

      // Create a new div to display username and message
      const messageDiv = document.createElement("div");
      messageDiv.className = "message-div";

      // Add the username to the message div
      const usernameElement = document.createElement("span");
      usernameElement.textContent = username + ': ';
      messageDiv.appendChild(usernameElement);

      // Add the message to the message div
      const messageTextElement = document.createElement("span");
      messageTextElement.textContent = messageText;
      messageDiv.appendChild(messageTextElement);

      messageElement.appendChild(messageDiv);
      messageElement.classList.add(messageClass);

      // Append the message to the message display
      messageDisplay.appendChild(messageElement);

      // Clear the textarea
      messageTextArea.value = "";
  }

  // Event listeners for the side panel open and close
  document.getElementById('menu-button').addEventListener('click', openNav);
  document.getElementById('close-button').addEventListener('click', closeNav);

  function openNav() {
      document.getElementById("side-panel").style.width = "250px";
  }

  function closeNav() {
      document.getElementById("side-panel").style.width = "0";
  }

  const settingsLink = document.querySelector('.settings-link');
  const settingsDropdown = document.querySelector('.settings-dropdown');

  settingsLink.setAttribute('aria-expanded', 'false');

  settingsLink.addEventListener('click', function () {
      const isExpanded = settingsLink.getAttribute('aria-expanded') === "true";

      // Toggle the aria-expanded attribute
      settingsLink.setAttribute('aria-expanded', !isExpanded);

      // Show or hide the dropdown based on the attribute
      if (!isExpanded) {
          settingsDropdown.style.display = 'block';
      } else {
          settingsDropdown.style.display = 'none';
      }
  });
});