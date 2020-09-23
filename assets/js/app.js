import "../styles/css/styles.css";

window.addEventListener("load", () => {
  const nav = document.querySelector("#navbar");
  const hamburgerBtn = document.querySelector(".hamburger");

  function resetNav() {
    nav.classList.remove("header__navbar-mobile-show");
    hamburgerBtn.classList.remove("hamburger-cross");
  }

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

  function navLinks() {
    document.querySelector("#home-link").addEventListener("click", () => {
      resetNav();
    });

    document.querySelector("#work-link").addEventListener("click", () => {
      resetNav();
    });

    document.querySelector("#projects-link").addEventListener("click", () => {
      resetNav();
    });
  }

  function revealOnScroll() {
    let itemsToReveal = document.querySelectorAll(".projects__grid-item");

    window.addEventListener("scroll", () => {
      itemsToReveal.forEach((el) => {
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
        if (scrollPercent < 75) {
          el.classList.add("reveal-item-is-visible");
        }
      });
    });
  }

  document.querySelector("#home-link").addEventListener("click", () => {
    document.querySelector(".hero-wrapper").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("#work-link").addEventListener("click", () => {
    document.querySelector("#mywork").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("#projects-link").addEventListener("click", () => {
    document.querySelector("#myprojects").scrollIntoView({ behavior: "smooth" });
  });

  hamburger();
  navLinks();
  revealOnScroll();
});
