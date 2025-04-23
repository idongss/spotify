const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SignInLink');
const RegisterLink=document.querySelector('.SignUpLink');
RegisterLink.addEventListener('click',()=>{
    container.classList.add('active');
})
LoginLinkLink.addEventListener('click',()=>{
    container.classList.remove('active');
})



function validateLogin() {
    // Get the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value; 

    // Hardcoded example for validation (you can replace this with your own logic or connect it to a server)
    var validUsername = "thanawod";
    var validPassword = "pass123";

    // Check if the entered credentials match
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.open("spotify .html");
        return true; // Allow form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false; // Prevent form submission
    }
}