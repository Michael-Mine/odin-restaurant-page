import homeImage from "../images/home-pic.jpg";

export function homePage() {
    const homeButton = document.querySelector("#home");
    homeButton.setAttribute("style", "background-color:#d5bb98");

    const aboutButton = document.querySelector("#about");
    aboutButton.setAttribute("style", "background-color:#bfa888");
 
    const menuButton = document.querySelector("#menu");
    menuButton.setAttribute("style", "background-color:#bfa888");

    const contentDiv = document.querySelector("#content");

    const header = document.createElement("h1");
    header.textContent = "Mike and Monika's House"
    contentDiv.appendChild(header);

    const imageDiv = document.createElement("div");
    contentDiv.appendChild(imageDiv);

    const image = document.createElement("img");
    image.src = homeImage;
    imageDiv.appendChild(image);

    const textDiv = document.createElement("div");
    textDiv.classList.toggle("text");
    textDiv.textContent = "We host feasts for our amazing friends!";
    contentDiv.appendChild(textDiv);
};