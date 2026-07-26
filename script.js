const typed = new Typed(".multiple-text", {
    strings: [
        "Web Developer",
        "Frontend Developer",
        "React Developer",
        "JavaScript Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

document.querySelectorAll(".navbar a").forEach(link => {
    link.onclick = () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
    };
});