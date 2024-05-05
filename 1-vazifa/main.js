function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("message");
  
    if (password.length == 0) {
      result.innerText = "Writing password";
      result.classList.add("required");
      result.classList.remove("easy", "normal", "strong");
    } else if (password.length <= 4) {
      result.innerText = "Your password is easy ";
      result.classList.add("easy");
      result.classList.remove("required", "normal", "strong");
    } else if (password.length > 4 && password.length < 8) {
      result.innerText = "Your password is normal";
      result.classList.add("normal");
      result.classList.remove("required", "easy", "strong");
    } else if (password.length >= 8) {
      result.innerText = "Your password is strong";
      result.classList.add("strong");
      result.classList.remove("required", "easy", "normal");
    }
  }