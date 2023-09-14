function elementCreator(el_type, class_name) {
    if (el_type == null || class_name == null)
        return null;
    var el = document.createElement(el_type);
    el.className = class_name;
    return el;
}

function createParallaxDiv(imagePath) {
    let parDiv = elementCreator("div", "parallax flexItem");
    if (imagePath == null || parDiv == null)
        return null;
    else
        parDiv.style.cssText = "background-image:url(" + imagePath + ");";
    return parDiv;
}