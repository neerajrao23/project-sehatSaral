function validateForm() {
    var password = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorElement = document.getElementById("passwordError");

    if (password !== confirmPassword) {
        errorElement.style.color = "#dc3545";
        errorElement.innerHTML = "Password and Confirm Password do not match";
        return false;
    }

    // Redirect to newUser.html after successful form submission
    window.location.href = "newUser.html";
    return true;
}
