"use strict";

const navButton = document.getElementById("navButton");
const navLinks = document.getElementById("navList");

navButton.addEventListener("click", function () {
    navLinks.classList.toggle("toggled");
})
