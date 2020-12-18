/* Animation */
function getScreenHeight() {
    let height = window.innerHeight || docElem.clientHeight || body.clientHeight;
    return height;
}

function getScreenWidth() {
    let width = window.innerWidth || docElem.clientWidth || body.clientWidth;
    return width;
}

function hidePanel(panel) {
    panelClasses = panel.classList;
    if (!panelClasses.contains("hidden")) {
        panelClasses.add("hidden");
    }
}

function showPanel(panel) {
    panelClasses = panel.classList;
    if (panelClasses.contains("hidden")) {
        panelClasses.remove("hidden");
    }
}

let width = getScreenWidth();
let height = getScreenHeight();

const about = document.getElementById("about");
const resume = document.getElementById("resume");
const projects = document.getElementById("projects");
const store = document.getElementById("store");
const contact = document.getElementById("contact");

//window.addEventListener("resize", getScreenWidth);

document.getElementById("about-trigger").addEventListener("click", function () {

    let width = getScreenWidth();

    if (width > 1200) {
        showPanel(about);
        hidePanel(resume);
        hidePanel(projects);
        hidePanel(store);
        hidePanel(contact);
    }

    window.location.hash = "about";

});

document.getElementById("resume-trigger").addEventListener("click", function () {

    let width = getScreenWidth();

    if (width > 1200) {
        hidePanel(about);
        showPanel(resume);
        hidePanel(projects);
        hidePanel(store);
        hidePanel(contact);
    }

    window.location.hash = "resume";

});

document.getElementById("projects-trigger").addEventListener("click", function () {

    let width = getScreenWidth();

    if (width > 1200) {
        hidePanel(about);
        hidePanel(resume);
        showPanel(projects);
        hidePanel(store);
        hidePanel(contact);
    }

    window.location.hash = "projects";

});

document.getElementById("store-trigger").addEventListener("click", function () {

    let width = getScreenWidth();

    if (width > 1200) {
        hidePanel(about);
        hidePanel(resume);
        hidePanel(projects);
        showPanel(store);
        hidePanel(contact);
    }
    
    window.location.hash = "store";
});

document.getElementById("contact-trigger").addEventListener("click", function () {

    let width = getScreenWidth();

    if (width > 1200) {
        hidePanel(about);
        hidePanel(resume);
        hidePanel(projects);
        hidePanel(store);
        showPanel(contact);
    }
    
    window.location.hash = "contact";

});

document.getElementById("contact-trigger-2").addEventListener("click", function () {

    let width = getScreenWidth();

    if (width > 1200) {
        hidePanel(about);
        hidePanel(resume);
        hidePanel(projects);
        hidePanel(store);
        showPanel(contact);
    }
    
    window.location.hash = "contact";

});

/* Form */

function getName() {
    var name = document.getElementById('input-name').value;
    alert(name);
    console.log(name);
}

function updateThankyouMsgWithName() {
    document.getElementById('display-name').innerHTML =
        document.getElementById('input-name').value;
}