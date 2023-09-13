let text_container = document.getElementById('textContainter');
function projectSelect(index) {
    index++;
    var h1 = document.createElement("h1");
    h1.textContent = "דף נחיתה " + index;
    var p = document.createElement("p");
    p.textContent = "לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת עריכה, בתחום הדפוס, ההדפסה והפרסום.";


    text_container.appendChild(h1);
    text_container.appendChild(p);

    var projectSS = document.createElement("div");
    projectSS.className = "projectSS";
    var image = document.createElement("img");
    image.className = "projectScreenS";
    image.src = projectImages[index - 1];
    image.alt = projectImages[index - 1];
    let img = document.getElementById('projectSS');
    img.appendChild(image);
}

let params = new URLSearchParams(location.search);
var projNum = params.get('projectNum')
projectSelect(projNum);

let contentProject = document.getElementById('contentProject');
contentProject.appendChild(createSmallIconList(allTechnologies, 1));