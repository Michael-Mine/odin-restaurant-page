import homeImage from "../images/home-pic.jpg";

export function homePage() {
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
    textDiv.textContent = "We host feasts for our amazing friends!";
    textDiv.classList.toggle("text");
    contentDiv.appendChild(textDiv);
};