let text_container = document.getElementById('textContainter');
function projectSelect(index) {
    index++;
    let h1 = document.createElement("h1");
    h1.textContent = "דף נחיתה " + index;
    let p = document.createElement("p");
    p.textContent = "לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת עריכה, בתחום הדפוס, ההדפסה והפרסום.";

    let btnList = document.querySelector('.buttonsList');
    text_container.appendChild(h1);
    text_container.appendChild(p);

    let projectSS = document.createElement("div");
    projectSS.className = "projectSS";
    let image = document.createElement("img");
    image.className = "projectScreenS";
    image.src = projectImages[index - 1];
    image.alt = projectImages[index - 1];
    let img = document.getElementById('projectSS');
    img.appendChild(image);
    let viewBtn = document.createElement("a");
    let downloadBtn = document.createElement("a");
    viewBtn.href = `./projects/ProjectName${index}/index.html`;
    downloadBtn.href = `./downloads/ProjectName${index}.zip`;
    downloadBtn.download = `./downloads/ProjectName${index}.zip`;
    viewBtn.innerHTML = 'הצג פרוייקט';
    downloadBtn.innerHTML = 'הורד קבצים';
    viewBtn.className = 'btnProject';
    downloadBtn.className = 'btnProject';
    btnList.appendChild(viewBtn);
    btnList.appendChild(downloadBtn);

}

let params = new URLSearchParams(location.search);
let projNum = params.get('projectNum')
projectSelect(projNum);

let contentProject = document.getElementById('contentProject');
contentProject.appendChild(createSmallIconList(allTechnologies, 1));