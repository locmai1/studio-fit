function validateForm() {
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

  var isNameError = false;
  var isEmailError = false;
  var isMessageError = false;

  if (nameInput.value == "") {
    nameError.textContent = "Name is required";
    isNameError = true;
  }

  if (emailInput.value == "") {
    emailError.textContent = "Email is required";
    isEmailError = true;
  }

  if (messageInput.value == "") {
    messageError.textContent = "Message is required";
    isMessageError = true;
  }

  if (isNameError || isEmailError || isMessageError) {
    return false;
  }

  return true;
}
