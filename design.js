let slideBar = document.querySelector(".slider");
slideBar.classList.add("hidden");

let showSlide = document.querySelector(".fa-bars");
let show = true;
showSlide.onclick = () => {
    if (show) {
        slideBar.classList.remove("hidden");
        slideBar.classList.add("animate");
    }
}
let hideSlide = document.querySelector(".fa-xmark");
let hide = true;
hideSlide.onclick = () => {
    if (hide) {
        slideBar.classList.add("hidden");
    }
}