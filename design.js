let getBody = document.querySelector("body");
let getBox = document.querySelector(".slider");
let xMark = document.querySelector(".material-symbols-outlined");
let menuBar = document.querySelector(".fa-bars");

// show slide menubar

menuBar.addEventListener("click", () => {
    timeOutMark();
    getBox.classList.add("show-animate");
    getBox.classList.remove("hide-animate");
    ShowTimeOut();
    bodyTime();
});
// x mar display
let showMark = () => {
    xMark.style.display = "block";
}
let timeOutMark = () => {
    setTimeout(showMark,300);
}
// show slide animation
let ShowTimeOut = () => {
    setTimeout(showSlide,300);
}
let showSlide = () => {
    getBox.style.display = "block";
}
// body background color time
let bodyTime = () => {
    setTimeout(bodyOpacity,300);
}
let bodyOpacity = () => {
    getBody.setAttribute("class","hide-body");
    getBody.classList.add("hide-body::after");
}

// hide slide x bar

xMark.addEventListener("click", () => {
    xMark.style.display = "none";
    hideTimeOut();
    hideBodyTime();
    getBox.classList.add("hide-animate");
    getBox.classList.remove("show-animate");
});
// hide slide
let hideTimeOut = () => {
    setTimeout(hideSlide,200);
}
let hideSlide = () => {
    getBox.style.display = "none";
}
// hide body background color
let hideBodyTime = () => {
    setTimeout(hideBody,200);
}
let hideBody = () => {
    getBody.removeAttribute("class");
}