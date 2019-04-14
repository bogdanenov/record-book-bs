window.onload = function () {
    var items = document.getElementsByClassName("item");
    var hamburger = document.getElementById("hamb");
    var wrapper = document.getElementById("wrapper");
    var container = document.getElementById("container");
    var stateHamburger = true;

    function setActiveMenu() {
        for (var i = 0; i < items.length; i++) {
            if(items[i] != this) {
                items[i].classList.remove("active");
            }
        }
        if(!this.classList.contains("active"))
            this.classList.toggle("active");
    }

    
    function setOnClick(list, method) {
        for (var i = 0; i < list.length; i++) {
            list[i].onclick = method;
        }
    }
    
    hamburger.addEventListener('click', function() {
        if(!stateHamburger) {
            hamburger.classList.toggle("is-active");
            container.classList.remove("is-visible");
            wrapper.style.filter = "blur(10px)";
            stateHamburger = !stateHamburger;
        } else {
            hamburger.classList.remove("is-active");
            wrapper.style.filter = "none";
            container.classList.toggle("is-visible");
            stateHamburger = !stateHamburger;
        }
    });

    window.onresize = function(){
        var width = window.innerWidth;
        if(width > 768 && (container.classList.contains("is-visible"))) {
            stateHamburger = true;
            container.classList.remove("is-visible");
            hamburger.classList.toggle("is-active");
        }
        if(width > 768) {
            wrapper.style = null;
        }
    }

    setOnClick(items, setActiveMenu);
}