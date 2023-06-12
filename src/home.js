function createHomePage() {
    const homePage = document.createElement("div");
    homePage.classList.add("home");

    const burgerTownLogo = document.createElement("img");
    burgerTownLogo.src = "images/burger_town_logo.png";
    burgerTownLogo.alt = "burger_town_logo";

    const p1 = document.createElement("p");
    p1.textContent = "The best burgers in Verdansk!";
    const p2 = document.createElement("p");
    p2.textContent = "бургер вам в помощь";

    homePage.appendChild(p1);
    homePage.appendChild(burgerTownLogo);
    homePage.appendChild(p2);

    return homePage;
}
  
  
function loadHomePage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomePage());
}
  
export default loadHomePage;