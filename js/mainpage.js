window.onload = function() {
  var items = document.getElementsByClassName("item");
  var hamburger = document.getElementById("hamb");
  var content = document.getElementById("main-content");
  var navbar = document.getElementById("left-menu");
  var stateHamburger = true;

  hamburger.addEventListener("click", function() {
    if (!stateHamburger) {
      hamburger.classList.remove("is-active");
      navbar.classList.remove("is-visible");
      navbar.style.height = "auto";
      content.style.filter = "none";
      stateHamburger = !stateHamburger;
    } else {
      hamburger.classList.toggle("is-active");
      content.style.filter = "blur(10px)";
      navbar.classList.toggle("is-visible");
      if (content.clientHeight > window.innerHeight)
        navbar.style.height = content.clientHeight + "px";
      stateHamburger = !stateHamburger;
    }
  });

  function setActiveMenu() {
    for (var i = 0; i < items.length; i++) {
      if (items[i] != this) {
        items[i].classList.remove("active");
      }
    }
    if (!this.classList.contains("active")) this.classList.toggle("active");
  }

  function setOnClick(list, method) {
    for (var i = 0; i < list.length; i++) {
      list[i].onclick = method;
    }
  }

  window.onresize = function() {
    var width = window.innerWidth;
    if (width > 768 && navbar.classList.contains("is-visible")) {
      stateHamburger = true;
      navbar.classList.remove("is-visible");
      hamburger.classList.toggle("is-active");
    }
    if (width > 768) {
      document.body.style.overflow = "auto";
      navbar.style.height = "auto";
      content.style = null;
    } else {
      if (content.clientHeight > window.innerHeight)
        navbar.style.height = content.clientHeight + "px";
    }
  };
  setOnClick(items, setActiveMenu);
};
