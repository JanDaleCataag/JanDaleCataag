function handleAuth() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (localStorage.getItem(email)) {
        if (localStorage.getItem(email) === password) {
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Incorrect password.");
        }
    } else {
        localStorage.setItem(email, password);
        alert("Account created! Please login.");
        toggleForm();
    }
}

function toggleForm() {
    const title = document.getElementById("form-title");
    const button = document.querySelector("button");
    const toggleText = document.getElementById("toggle-form");

    if (title.innerText === "Login") {
        title.innerText = "Sign Up";
        button.innerText = "Sign Up";
        toggleText.innerHTML = "Already have an account? <span onclick='toggleForm()'>Login</span>";
    } else {
        title.innerText = "Login";
        button.innerText = "Login";
        toggleText.innerHTML = "Don't have an account? <span onclick='toggleForm()'>Sign Up</span>";
    }
}
