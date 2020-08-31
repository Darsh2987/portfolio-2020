window.addEventListener("load", function() {

  function hamburger() {
    document.querySelector("#hamburger").addEventListener("click", menu);

    function menu() {
      const nav = document.querySelector("#navbar");
      const hamburger = document.querySelector(".hamburger");

      if (nav.classList.contains("header__navbar-mobile-show")) {
        nav.classList.remove("header__navbar-mobile-show");
        hamburger.classList.remove("hamburger-cross");
      } else {
        nav.classList.add("header__navbar-mobile-show");
        hamburger.classList.add("hamburger-cross");
      }
    }
  };

  function revealOnScroll() {
    let itemsToReveal = document.querySelectorAll(".mywork__grid-item")

    window.addEventListener("scroll", () => {
      itemsToReveal.forEach(el => {
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
        if (scrollPercent < 75) {
          el.classList.add("reveal-item-is-visible")
        }
      })
    })
  };

  hamburger();
  revealOnScroll()

})