function handleShowPassword() {
    const checkBox = document.getElementById("show-password");
    const passwordField = document.getElementById("password");
    
    if (checkBox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function handleFormReset() {
    const signInForm = document.querySelector("form");
    signInForm.reset();
}