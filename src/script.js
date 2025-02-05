//user provides details for registration
function registerUser() {
    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let sport = document.getElementById('sport').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    //if statement checks's if the passwords match before accepting registration
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    //datat captured is stored in localStorage
    let user = { firstName, secondName, surname, email, gender, sport, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration successful! Please login.");
    toggleForms();
}
//login function that enable users' with accounts registered to login
function loginUser() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let user = localStorage.getItem(email);

    if (!user) {
        alert("User not found!");
        return;
    }

    user = JSON.parse(user);
    if (user.password !== password) {
        alert("Incorrect password!");
        return;
    }

    alert("Login successful! Welcome " + user.firstName);
    // Redirect to another page after login
    window.location.href = "dashboard.html"; 
}