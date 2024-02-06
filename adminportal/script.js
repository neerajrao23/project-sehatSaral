function displayOption(option) {
    var loginContent = document.getElementById("login-content");

    
    loginContent.innerHTML = "";

    if (option === 'UserId') {
        var userIdInput = document.createElement("input");
        userIdInput.type = "text";
        userIdInput.placeholder = "Enter User ID";
        userIdInput.id = "user-id-input";

       
        var passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.placeholder = "Enter Password";
        passwordInput.id = "password-input";

        var loginButton = document.createElement("button");
        loginButton.className = "login-button";
        loginButton.textContent = "LOGIN";
        loginButton.onclick = sendLogin;

        loginContent.appendChild(userIdInput);
        loginContent.appendChild(passwordInput);
        loginContent.appendChild(loginButton);
    }
}

function sendLogin() {
   
    alert("Enter correct login details");
}
