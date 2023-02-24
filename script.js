const hamburgerButton = document.querySelector(".btn-toggle")
const navigation = document.querySelector("nav")
const navLink = document.querySelectorAll(".nav__link")

hamburgerButton.addEventListener("click", toggleNav)
navLink.forEach(a => a.addEventListener("click", () => toggleNav()))

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}