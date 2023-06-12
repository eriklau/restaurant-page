function createContactPage() {
    const contactPage = document.createElement("div");
    contactPage.classList.add("contact");

    const hours = document.createElement("p");
    hours.textContent = "🕑 Mon-Sat: 10am-10pm";

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "📞+380714819464";

    const location = document.createElement("p");
    location.textContent = "📍 вулиця Університетська, 20, Донецьк, Донецька область, 83000";

    contactPage.appendChild(hours);
    contactPage.appendChild(phoneNumber);
    contactPage.appendChild(location);

    return contactPage;
}


function loadContactPage() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContactPage());
}

export default loadContactPage;