import aboutImage from "../images/about-pic.jpg";

export function aboutPage() {
    const homeButton = document.querySelector("#home");
    homeButton.setAttribute("style", "background-color:#bfa888");

    // homeButton.addEventListener('mouseover', () => {
    //     homeButton.style.backgroundColor = "#d5bb98";
    // });

    // homeButton.addEventListener('mouseout', () => {
    //     homeButton.style.backgroundColor = "#bfa888";
    // });

    const aboutButton = document.querySelector("#about");
    aboutButton.setAttribute("style", "background-color:#d5bb98");

    const menuButton = document.querySelector("#menu");
    menuButton.setAttribute("style", "background-color:#bfa888")

    // menuButton.addEventListener('mouseover', () => {
    //     menuButton.style.backgroundColor = "#d5bb98";
    // });

    // menuButton.addEventListener('mouseout', () => {
    //     menuButton.style.backgroundColor = "#bfa888";
    // }); 

    const contentDiv = document.querySelector("#content");

    const header = document.createElement("h1");
    header.textContent = "Mike and Monika's House"
    contentDiv.appendChild(header);

    const imageDiv = document.createElement("div");
    contentDiv.appendChild(imageDiv);

    const image = document.createElement("img");
    image.src = aboutImage;
    imageDiv.appendChild(image);

    const textDiv1 = document.createElement("div");
    textDiv1.classList.toggle("text");
    textDiv1.textContent = "From our home kitchen, we cook and serve many delicious small and big plates to feed our hungry friends.";
    contentDiv.appendChild(textDiv1);

    const textDiv2 = document.createElement("div");
    textDiv2.classList.toggle("text");
    textDiv2.style.paddingTop = "0px";
    textDiv2.textContent = "Location: London, UK";
    contentDiv.appendChild(textDiv2);

    const textDiv3 = document.createElement("div");
    textDiv3.classList.toggle("text");
    textDiv3.style.paddingTop = "0px";
    textDiv3.innerHTML = "<u>Opening Hours:</u> <br> Sunday to Monday: Closed <br> Tuesday to Thursday: 7pm to 10pm <br> Friday to Saturday: 4pm to 2am"
    
    contentDiv.appendChild(textDiv3);
};