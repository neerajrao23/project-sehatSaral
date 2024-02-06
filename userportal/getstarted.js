// getstarted.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get username and password values
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Example: Validate username and password (replace with your own validation logic)
    if (username === '123456789' && password === '1234') {
        // Redirect to the dashboard page upon successful login
        window.location.href = 'userLogin.html';
    } else {
        // Display error message for invalid credentials
        document.getElementById('passwordError').textContent = 'Invalid username or password';
    }
});
