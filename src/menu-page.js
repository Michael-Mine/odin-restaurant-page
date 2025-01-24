import menuImage from "../images/menu-pic.jpg";

export function menuPage() {
    document.getElementById("menu").style.backgroundColor = "#d5bb98";

    const contentDiv = document.querySelector("#content");

    const header = document.createElement("h1");
    header.textContent = "Mike and Monika's House"
    contentDiv.appendChild(header);

    const imageDiv = document.createElement("div");
    contentDiv.appendChild(imageDiv);

    const image = document.createElement("img");
    image.src = menuImage;
    imageDiv.appendChild(image);

    const containerDiv = document.createElement("div");
    containerDiv.classList.toggle("menu-container");
    contentDiv.appendChild(containerDiv);

    const textDiv1 = document.createElement("div");
    textDiv1.innerHTML = "<u>Small plates:</u> <br> Greek Olives <br> Fresh bread <br> Halloumi and tomatos <br> Cheese board and crackers <br> Cured Meats <br> Salad of the day <br> Meatballs in sauce";
    containerDiv.appendChild(textDiv1);

    const textDiv2 = document.createElement("div");
    textDiv2.innerHTML = "<u>Big plates:</u> <br> Lasagna <br> Butter Chicken <br> Buttermilk Chicken Roast <br> Fresh Fish <br> Pasta in sauce <br> Salad of the day <br> Soup of the day";
    containerDiv.appendChild(textDiv2);

    const textDiv3 = document.createElement("div");
    textDiv3.innerHTML = "<u>Drinks:</u> <br> Red & White Wine <br> Beer & Cider <br> Gin & Tonic <br> Vodka & Juice <br> Whiskey & Rum <br> French Martini cocktail <br> Manhattan cocktail";
    containerDiv.appendChild(textDiv3);
};