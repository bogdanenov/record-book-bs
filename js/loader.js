window.onload = function() {
    var letterH = document.getElementById("line");
    var loadW = document.getElementById("load-wrapp");

    function enableLoading(state) {
        if(state)
            letterH.classList.toggle("disable");
        else 
            letterH.classList.remove("disable");
    }
}