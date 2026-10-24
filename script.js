/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");


// Open / close mobile menu

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


// Close menu after clicking navigation link

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navItems.forEach((item) => {

                item.classList.remove("active");

                if (
                    item.getAttribute("href") ===
                    `#${sectionId}`
                ) {

                    item.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();