function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// download the cv button
document.querySelector(".js-download-cv")
    .addEventListener("click", () => {
        window.open('./assets/resume-example.pdf');
    });

//leads the user to the contact part of the website
document.querySelector(".js-contact-info")
    .addEventListener("click", () => {
        location.href = "#contact";
    });

document.querySelector(".js-github-profile")
    .addEventListener("click", () => {
        location.href = "https://github.com/BinMamun";
    })