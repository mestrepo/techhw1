//Reload Button:
var resetButton = document.getElementById('resetButton');
resetButton.onclick = reloadPage;

function reloadPage() {
    window.location.reload();
}

/*
Event : mouse over
identify moused element and highlight moused element
 */
[].forEach.call(document.querySelectorAll('body > nav > a'), function (link) {
    link.addEventListener('mouseover', mouseOver);
    link.addEventListener('mouseout', mouseOut);
});

function mouseOver() {
    this.classList.add("hovered");
}

function mouseOut() {
    this.classList.remove("hovered");
}


/*
Event: double click
 */
document.getElementById("about").addEventListener("dblclick", doubleClickAbout);

function doubleClickAbout() {
    document.getElementById("about").innerHTML = "I was double-clicked!";
}


/*
EVENT: on scroll
 */
// 1. change text with scroll
window.addEventListener('scroll', function () {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});


// 2. Scroll navbar
const nav = document.querySelector('#navbar');
const navTop = nav.offsetTop;

function stickyNavigation() {
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);

    if (window.scrollY >= navTop) {
        // nav offsetHeight = height of nav
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', stickyNavigation);


/*
EVENT: User inputs something
 */

// 1. for oninput event
function showUserInput() {
    var x = document.getElementById("userinput").value;
    document.getElementById("showuserinput").innerHTML = "You wrote: " + x;
}

// 2.
function toUpperCase() {
    var x = document.getElementById("userinput");
    x.value = x.value.toUpperCase();
    document.getElementById("tranformeduserinput").innerHTML = "Transformed user input: " + x.value;
}

/*
ACTION: textchange
 */

// 1. text change with onchange event
function showSelectedElement() {
    var x = document.getElementById("eitclasses").value;
    document.getElementById("userselection").innerHTML = "EIT CLASS: " + x;
}

// 2. change the header text
function changeHomeText() {
    // var myHeading = document.querySelector('#h1');
    var myHeading = document.getElementById('home');
    console.log(myHeading);
    // var myHeading = document.querySelector('header > h1');
    myHeading.textContent = 'Hello world!';
}

/*
ACTION: change the image
 */
const pegasus = 'images/51pegasib-small.jpg';
const ceres = 'images/ceres-small.jpg';
const europa = 'images/europa-small.jpg';
const attributeName = 'src';

// 1.
function changeImageOnDoubleClick() {
    const myImage = document.getElementById('pegasus');

    // var me = 'images/me.jpg';
    // const attributeName = 'src';
    const mySrc = myImage.getAttribute(attributeName);
    if (mySrc === pegasus) {
        myImage.setAttribute(attributeName, ceres);
    } else {
        myImage.setAttribute(attributeName, pegasus);
    }
}

//2.
function changeImageOnMouseOver() {
    const myImage = document.getElementById('europa');
    // var me = 'images/me.jpg';
    const mySrc = myImage.getAttribute(attributeName);
    if (mySrc === europa) {
        myImage.setAttribute(attributeName, ceres);
    } else {
        myImage.setAttribute(attributeName, europa);
    }
}

/*
ACTION: background color
 */

// 1. change background to red
function changeBackgroundToRed() {
    document.body.style.backgroundColor = "#ff0000";
}

// 2. change background to white
function changeBackgroundToWhite() {
    document.body.style.backgroundColor = "#ffffff";
}

/*
ACTION: text color change
 */

// 1.
function changeTextColorToGreen() {
    document.getElementById("projects").style.color = "#62ff00";
}

//2.
function changeTextColorToBlack() {
    document.getElementById("projects").style.color = "#000000";
}

/*
ACTION: element size change
 */

//1. html body element resize counter
function countWindowResize() {
    var x = 0;
    var txt = (x += 1);
    document.getElementById("windowresizecount").innerHTML = txt;

}

//2. html body element coloring
function windowColorChangeOnResize() {
    console.clear();
    bodyElement = document.getElementById('body');
    var random = function (min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = rand ^ 0;
        return rand;
    }

    bodyElement.style.background = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';

}