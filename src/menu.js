function createMenuPage() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuLink = document.createElement("a");
    menuLink.classList.add("menu-link");
    menuLink.href = 'https://youtu.be/Jb7KOZFoqWk?t=35';
    menuLink.textContent = "Click here for more options!";

    menu.appendChild(createBurgers("Classic Chicken Sandwich", "Ground chicken patty, breaded and fried on a hard roll, with lettuce and tomato.", "$5.69"));
    menu.appendChild(createBurgers("Classic Burger", "Similar to Burger King's Whopper.", "$5.99"));
    menu.appendChild(createBurgers("Crispy Chicken Burger", "Cut of chicken breast, batter fried, and served with lettuce and tomato on a sesame seed bun.", "$4.99"));
    menu.appendChild(createBurgers("Big Man Burger", "Similar to another Big Burger", "$6.49"));
    menu.appendChild(menuLink);

    return menu;
}

function createBurgers(name, description, price) {
    const burger = document.createElement("div");
    burger.classList.add("burger");

    const burgerName = document.createElement("h1");
    burgerName.textContent = name;
    const burgerDescription = document.createElement("p");
    burgerDescription.textContent = description;
    const burgerPrice = document.createElement("p");
    burgerPrice.textContent = price;

    const burgerImage = document.createElement("img");
    let imageName = name.split(" ").join("_").toLowerCase();
    burgerImage.src = `images/${imageName.toLowerCase()}.png`;
    burgerImage.alt = `${name}`;

    burger.appendChild(burgerImage);
    burger.appendChild(burgerName);
    burger.appendChild(burgerDescription);
    burger.appendChild(burgerPrice);

    return burger;
}


function loadMenuPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuPage());
}

export default loadMenuPage;