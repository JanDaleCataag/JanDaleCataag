// Toggle Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Code Editor Functionality
function runCode() {
    let code = document.getElementById("code").value;
    let output = document.getElementById("output").contentWindow.document;
    output.open();
    output.write(`<script>${code}</script>`);
    output.close();
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
