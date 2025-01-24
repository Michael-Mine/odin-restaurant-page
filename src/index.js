import "./styles.css";

import { homePage } from "./home-page";
import { aboutPage } from "./about-page";
import { menuPage } from "./menu-page";

homePage();

const homeButton = document.querySelector("#home");
const aboutButton = document.querySelector("#about");
const menuButton = document.querySelector("#menu");
const contentDiv = document.querySelector("#content");

function clearContent() {
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

homeButton.addEventListener("click", () => {
    
    clearContent();
    homePage();
});

aboutButton.addEventListener("click", () => {
    
    clearContent();
    aboutPage();
});

menuButton.addEventListener("click", () => {
    
    clearContent();
    menuPage();
});
