function handleSignInButtonClick() {
    username = document.getElementById("username").value;
    password = document.getElementById("username").value;

    if (username.length == 0 || password.length < 8) {
        alert("Please enter valid credentials");
    }
    else {
        alert("You have logged in....")
    }
}