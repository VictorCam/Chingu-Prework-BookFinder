
function div(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

function img(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}

function span(className, textContent) {
    const span = document.createElement('span');
    span.classList.add(className);
    span.textContent = textContent;
    return span;
}

function button(className, textContent, link) {
    const button = document.createElement('button');
    button.classList.add(className);
    button.setAttribute('onclick', "location.href='" + link + "';");
    button.textContent = textContent;
    return button;
}

const createElement = {
    div,
    img,
    span,
    button
}

export { createElement }