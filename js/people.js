var btnBox = document.getElementsByClassName("btn-box");
var btnforms = document.getElementsByClassName("card-lists");

function setActiveBtn() {
    for (var i = 0; i < btnBox.length; i++) {
        if(btnBox[i] != this) {
            btnBox[i].classList.remove("isSelect");
        }
    }
    if(!this.classList.contains("isSelect"))
        this.classList.toggle("isSelect");

    if(this == btnBox[0]) {
        btnforms[0].classList.remove("disabled");
        btnforms[1].classList.toggle("disabled");
        btnBox[0].disabled = true;
        btnBox[1].disabled = false;
    } else {
        btnforms[1].classList.remove("disabled");
        btnforms[0].classList.toggle("disabled");
        btnBox[0].disabled = false;
        btnBox[1].disabled = true;
    }
}

function setOnClick(list, method) {
    for (var i = 0; i < list.length; i++) {
        list[i].onclick = method;
    }
}

setOnClick(btnBox, setActiveBtn);