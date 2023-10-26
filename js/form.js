document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";

    if (nameInput.value == "") {
      nameError.textContent = "Name is required";
      e.preventDefault();
    }

    if (emailInput.value == "") {
      emailError.textContent = "Email is required";
      e.preventDefault();
    }

    if (messageInput.value == "") {
      messageError.textContent = "Message is required";
      e.preventDefault();
    }
  });
