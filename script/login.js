document.addEventListener('DOMContentLoaded', function () {
    let credentials = {
        "raihanrifat222@gmail.com": "raihan"
    }
    document.getElementById("login-btn").addEventListener('click', function () {
        const email= document.getElementById('email-field');
        const password= document.getElementById('pass-field');
        const loginBtn= document.getElementById('login-btn');

        if (credentials[email.value]=== password.value) {
            window.location.href = "bank.html";
        }
        else {
            alert("Wrong email or password");
        }
    });
        
});
