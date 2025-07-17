function handleShowPassword() {
    let checkBox = document.getElementById("show-password");
    let passwordField = document.getElementById("password");
    
    if (checkBox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function handleFormReset() {
    document.querySelector("form").reset();
}