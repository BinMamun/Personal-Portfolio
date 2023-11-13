function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// download the cv button
document.querySelector(".js-download-cv")
    .addEventListener("click", () => {
        window.open('./assets/Abdullah Bin Mamun.pdf');
    });

//leads the user to the contact part of the website
document.querySelector(".js-contact-info")
    .addEventListener("click", () => {
        location.href = "#contact";
    });

document.querySelector(".js-github-profile")
    .addEventListener("click", () => {
        location.href = "https://github.com/BinMamun";
    });

document.querySelector(".js-arrow-to-experience")
    .addEventListener("click", () => {
        location.href = "./#experience";
    });

document.querySelector(".js-arrow-to-projects")
    .addEventListener("click", () => {
        location.href = "./#projects";
    });
document.querySelector(".js-arrow-to-contact")
    .addEventListener("click", () => {
        location.href = "./#contact";
    });