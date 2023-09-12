// JavaScript to toggle the mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

var projectImages = ["images/landingPage1.jpg", "images/landingPage2.jpg", "images/landingPage3.jpg", "images/landingPage4.png", "images/landingPage5.png", "images/landingPage6.png"];
// Function to generate the provided HTML structure
function createProjectGalleryItem(imageindex) {
    var projectGalleryItem = document.createElement("div");
    projectGalleryItem.className = "projectGalleryItem grid";

    var image = document.createElement("img");
    image.className = "projectImage";
    image.src = projectImages[imageindex];
    image.alt = projectImages[imageindex];

    var section = document.createElement("section");
    var h1 = document.createElement("h1");
    h1.textContent = "Landing Page";
    var p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia expedita quis velit ipsa a aspernatur harum reiciendis voluptatibus at.";

    var iconContainer = document.createElement("div");
    iconContainer.className = "iconContainer grid";

    var smallIcons = ["images/HTML-icon.png", "images/CSS-icon.png", "images/Bootstrap-icon.png", "images/SASS-icon.png"];
    for (var i = 0; i < smallIcons.length; i++) {
        var icon = document.createElement("img");
        icon.src = smallIcons[i];
        icon.alt = "";
        icon.className = "smallIcons";
        iconContainer.appendChild(icon);
    }

    var button = document.createElement("button");
    button.className = "projectBtn";
    button.textContent = "Project Page";
    // Create an img element for the SVG icon
    var svgIcon = document.createElement("img");
    svgIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMWVtIj4KICA8cGF0aCBkPSJNMjA5LjYgMjc4LjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjMgMC0xMi41IDI5OC4yLTMxLjggMTIuNS0xMi41IDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDEyLjUgNDUuMyAwIDEyLjUtIDI5OC4yIDMxLjggMTIuNSAxMi41IDMyLjggMCAzMjguOCAxMi41IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTYwLjUgMzIuOCAwLTEyLjUtMzIuOC0zMi44IDAtMzIuOCAxMi41LTMyLjggMzIuOCAwIDAgMzIuOC0zMi44IDMyLjgtMzIuOCAwIDEyLjUtMzIuOCAzMjguOCAwIDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTYwLjUgMzIuOCAwLTEyLjUtMzIuOC0zMi44IDAtMzIuOCAxMi41LTMyLjggMzIuOCAwIDEyLjUtMzIuOCAzMjguOCAwIDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTYwLjUgMzIuOCAwLTEyLjUtMzIuOC0zMi44IDAtMzIuOCAxMi41LTMyLjggMzIuOCAwIDEyLjUtMzIuOCAzMjguOCAwIDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTYwLjUgMzIuOCAwLTEyLjUtMzIuOC0zMi44IDAtMzIuOCAxMi41LTMyLjggMzIuOCAwIDEyLjUtMzIuOCAzMjguOCAwIDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTYwLjUgMzIuOCAwLTEyLjUtMzIuOC0zMi44IDAtMzIuOCAxMi41LTMyLjggMzIuOCAwIDEyLjUtMzIuOCAzMjguOCAwIDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTYwLjUgMzIuOCAwLTEyLjUtMzIuOC0zMi44IDAtMzIuOCAxMi41LTMyLjggMzIuOCAwIDEyLjUtMzIuOCAzMjguOCAwIDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTYwLjUgMzIuOCAwLTEyLjUtMzIuOC0zMi44IDAtMzIuOCAxMi41LTMyLjggMzIuOCAwIDEyLjUtMzIuOCAzMjguOCAwIDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTYwLjUgMzIuOCAwLTEyLjUtMzIuOC0zMi44IDAtMzIuOCAxMi41LTMyLjggMzIuOCAwIDEyLjUtMzIuOCAzMjguOCAwIDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTYwLjUgMzIuOCAwLTEyLjUtMzIuOC0zMi44IDAtMzIuOCAxMi41LTMyLjggMzIuOCAwIDEyLjUtMzIuOCAzMjguOCAwIDMyLjggMTIuNSA0NS4zIDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41IDMyLjggMTIuNSAzMi44IDAgMTIuNSAzMi44IDQ1LjMgMCAxMi41LTM1LjIgMTYwLTE2MC4zIDcyLjYgMTY0LjYgMjc4LjYgMTYwLjEgMC0zMi44LTEyLjUtMzIuOC0zMi44czMyLjgtMTIuNSAzMi44LTMzLjggMTIuNS0zMi44LTMzLjggMCAwLTMzLjgtMTIuNS0zMy44LTMzLjh6Ij4KPC9zdmc+Cg==";
    svgIcon.alt = "";
    svgIcon.className = "svgIcon";
    button.appendChild(svgIcon);

    section.appendChild(h1);
    section.appendChild(p);

    projectGalleryItem.appendChild(image);
    projectGalleryItem.appendChild(section);
    projectGalleryItem.appendChild(iconContainer);
    projectGalleryItem.appendChild(button);

    return projectGalleryItem;
}

// Number of times to create the HTML structure
var n = 6; // Change this to the desired number

// Get a reference to the container where the HTML will be appended
var container = document.getElementById("projectGal");

// Create the HTML structure n times and append it to the container
for (var i = 0; i < n; i++) {
    var projectItem = createProjectGalleryItem(i);
    container.appendChild(projectItem);
}