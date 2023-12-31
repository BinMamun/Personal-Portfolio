//toggles the hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// download cv button
document.querySelector(".js-download-cv")
    .addEventListener("click", () => {
        window.open('./assets/Abdullah Bin Mamun.pdf');
    });

//leads the user to the contact part of the website
document.querySelector(".js-contact-info")
    .addEventListener("click", () => {
        location.href = "#contact";
    });


//redirects the user to my github account
const githubProfileLogo = document.querySelector(".js-github-profile");
githubProfileLogo.addEventListener("click", () => {
    window.open("https://github.com/BinMamun", '_blank');
});

//leads the user to the experience part of the website
document.querySelector(".js-arrow-to-experience")
    .addEventListener("click", () => {
        location.href = "./#experience";
    });

document.querySelector(".js-arrow-to-projects")
    .addEventListener("click", () => {
        location.href = "./#projects";
    });

//leads the user to the contact part of the website
document.querySelector(".js-arrow-to-contact")
    .addEventListener("click", () => {
        location.href = "./#contact";
    });

document.querySelector(".js-project-amazon-link")
    .addEventListener("click", () => {
        window.open("https://github.com/BinMamun/javascript-amazon-project.git", "_blank");
    });

document.querySelector(".js-project-youtube-link")
    .addEventListener("click", () => {
        window.open("https://github.com/BinMamun/html-css-practice.git", "_blank");
    });

const darkIcon = document.querySelector(".js-dark-icon");

const body = document.querySelector("body");

darkIcon.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        darkIcon.src = "./assets/sun.png";
        githubProfileLogo.src = "./assets/github-white.png";
    } else {
        darkIcon.src = "./assets/moon.png";
        githubProfileLogo.src = "./assets/github.png";
    }
})