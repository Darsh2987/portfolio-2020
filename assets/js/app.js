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
  }

  hamburger();

})