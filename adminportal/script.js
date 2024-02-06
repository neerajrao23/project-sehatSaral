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
function sendLogin() {
    // Get user input values
    var userId = document.getElementById("user-id-input").value;
    var password = document.getElementById("password-input").value;

    // Check if login details are correct (you can replace this with your own logic)
    if (userId === "saral@123" && password === "saral@123") {
        // Redirect to another page
        window.location.href = "dashboard.html"; // Replace "dashboard.html" with the desired page
    } else {
        // Display an alert for incorrect login details
        alert("Incorrect login details. Please try again.");
    }
}

