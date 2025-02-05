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

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let user = { firstName, secondName, surname, email, gender, sport, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration successful! Please login.");
    toggleForms();
}