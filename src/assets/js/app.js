import "../styles/css/styles.css";

window.addEventListener("load", () => {
  // Global Variables
  const nav = document.querySelector("#navbar");
  const hamburgerBtn = document.querySelector(".hamburger");

  // Function to remove nav overlay and set hamburger icon to normal when a nav link is clicked
  function resetNav() {
    nav.classList.remove("header__navbar-mobile-show");
    hamburgerBtn.classList.remove("hamburger-cross");
  }

  // function to show nav overlay when hamburger icon is cliked
  function hamburger() {
    document.querySelector("#hamburger").addEventListener("click", () => {
      if (nav.classList.contains("header__navbar-mobile-show")) {
        resetNav();
      } else {
        nav.classList.add("header__navbar-mobile-show");
        hamburgerBtn.classList.add("hamburger-cross");
      }
    });
  }

  // function to call resetNav function and smooth scroll when a nav link is clicked
  function navLinks() {
    document.querySelector("#home-link").addEventListener("click", () => {
      resetNav();
      document.querySelector(".hero-wrapper").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#work-link").addEventListener("click", () => {
      resetNav();
      document.querySelector("#mywork").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#projects-link").addEventListener("click", () => {
      resetNav();
      document.querySelector("#myprojects").scrollIntoView({ behavior: "smooth" });
    });
  }

  // function to reveal hero section - fade in effect
  function revealHero() {
    const hero = document.querySelector(".hero");
    hero.style.opacity = "1";
    hero.style.transition = "opacity 6s";
  }

  // function to reveal mywork and projects items on scroll
  function revealOnScroll() {
    let itemsToReveal = document.querySelectorAll(".projects__grid-item");

    window.addEventListener("scroll", () => {
      itemsToReveal.forEach((el) => {
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
        if (scrollPercent < 75) {
          el.classList.add("reveal-item-is-visible");
        } else {
          el.classList.remove("reveal-item-is-visible");
        }
      });

      // make header solid on scroll
      const header = document.querySelector(".header");
      if (window.scrollY > 0) {
        header.style.backgroundColor = "rgba(25,25,45, 0.99)";
        header.style.transition = "background-color 0.5s";
      } else {
        header.style.backgroundColor = "";
      }
    });
  }

  hamburger();
  navLinks();
  revealHero();
  revealOnScroll();
});
