import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "WELCOME TO BURGER TOWN";

    header.appendChild(title);
    header.appendChild(createNavBar());

    return header;
}


function createNavBar() {
    const navBar = document.createElement("nav");
    navBar.classList.add("nav-bar");
    
    const homeButton = document.createElement("button");
    homeButton.classList.add("nav-button");
    homeButton.textContent = "HOME";
    homeButton.addEventListener('click', (e) => {
        loadHomePage();
    })

    const menuButton = document.createElement("button");
    menuButton.classList.add("nav-button");
    menuButton.textContent = "MENU";
    menuButton.addEventListener('click', (e) => {
        loadMenuPage();
    })

    const contactButton = document.createElement("button");
    contactButton.classList.add("nav-button");
    contactButton.textContent = "CONTACT";
    contactButton.addEventListener('click', (e) => {
        loadContactPage();
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);

    return navBar;
}

// button press action on one of home, menu, contact?
// function buttonClick() {

// }
// 

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function loadWebpage() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain());
    // set active button?
    loadHomePage();
}

export default loadWebpage;