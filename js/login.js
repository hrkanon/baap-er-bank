// getting login button
const loginButton = document.getElementById("login");
// loginbutton event handler
loginButton.addEventListener("click", function () {
  // getting user email from input feild
  const userEmail = document.getElementById("user-email").value;
  // getting user password from input feild
  const userPassword = document.getElementById("user-password").value;
  if (userEmail == "abc@def.com" && userPassword == 12345) {
    window.location.href = "bank.html";
  }
});
