/* =========================================================
   RRBSC PSYCHOLOGY
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
   ========================================================= */

const navLinks = document.querySelectorAll(
    ".mobile-navigation a"
);

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


/* =========================================================
   SIMPLE IMAGE FADE-IN
   ========================================================= */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("load", () => {

        image.classList.add("loaded");

    });

});