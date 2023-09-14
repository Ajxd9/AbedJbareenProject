// JavaScript to toggle the mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
var projectImages = ["images/landingPage1.jpg", "images/landingPage2.jpg", "images/landingPage3.jpg", "images/landingPage4.png", "images/landingPage5.png", "images/landingPage6.png"];
var allTechnologies = ["./images/HTML-icon.png", "./images/CSS-icon.png", "./images/Bootstrap-icon.png", "./images/SASS-icon.png", "./images/HTML-icon.png", "./images/CSS-icon.png", "./images/Bootstrap-icon.png", "./images/SASS-icon.png", "./images/HTML-icon.png", "./images/CSS-icon.png", "./images/Bootstrap-icon.png"];










hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

//Create Icons to be added to a div
function createSmallIconList(iconList, small) {
    var listLength;
    if (small == 1)
        listLength = 4;
    else
        listLength = iconList.length;
    var iconContainer = document.createElement("div");
    iconContainer.className = "iconContainer";


    for (var i = 0; i < listLength; i++) {
        var icon = document.createElement("img");
        icon.src = iconList[i];
        icon.alt = iconList[i];
        icon.className = "smallIcons";
        iconContainer.appendChild(icon);
    }
    return iconContainer;
}



// Function to generate the provided HTML structure
function createProjectGalleryItem(imageIndex) {
    if (imageIndex == null)
        return;
    var projectGalleryItem = document.createElement("div");
    projectGalleryItem.className = "projectGalleryItem grid";

    var image = document.createElement("img");
    image.className = "projectImage";
    image.src = projectImages[imageIndex];
    image.alt = projectImages[imageIndex];

    var section = document.createElement("section");
    var h1 = document.createElement("h1");
    h1.textContent = "שם הפרויקט";
    var p = document.createElement("p");
    p.textContent = "לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת עריכה,";
    var button = document.createElement("a");
    button.className = "projectBtn";
    button.textContent = "לעמוד הפרויקט" + ">> ";
    button.href = "./projectsPage.html?projectNum=" + imageIndex;

    section.appendChild(h1);
    section.appendChild(p);

    projectGalleryItem.appendChild(image);
    projectGalleryItem.appendChild(section);
    projectGalleryItem.appendChild(createSmallIconList(allTechnologies, 1, 1));
    projectGalleryItem.appendChild(button);

    return projectGalleryItem;
}






//add the technologies to the content div on the main page
let content = document.getElementById('content');
if (content != null)
    content.appendChild(createSmallIconList(allTechnologies, 0));
// Number of times to create the HTML structure
var n = 6; // Change this to the desired number

// Get a reference to the container where the HTML will be appended
var container = document.getElementById("projectGal");
if (container != null)
    // Create the HTML structure n times and append it to the container
    for (var i = 0; i < n; i++) {
        var projectItem = createProjectGalleryItem(i);
        container.appendChild(projectItem);
    }
