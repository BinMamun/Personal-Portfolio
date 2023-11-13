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
document.querySelector(".js-github-profile")
    .addEventListener("click", () => {
        location.href = "https://github.com/BinMamun";
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