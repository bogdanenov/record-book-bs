window.onload = function () {
    const realInput = document.getElementById('real-input');
    const uploadButton = document.querySelector('.browse-btn');
    const fileInfo = document.querySelector('.file-info');
    const realInputWorker = document.getElementById('real-input-worker');
    const uploadButtonWorker = document.querySelector('.browse-btn-worker');
    const fileInfoWorker = document.querySelector('.file-info-worker');
    
    var btnBox = document.getElementsByClassName("btn-box");
    var btnforms = document.getElementsByClassName("btn-form");
    var regFormStudent = document.getElementById("form-student");
    var regFormWorker = document.getElementById("form-worker");
    var pass = document.getElementById("pass-reg");
    var passSlash = document.getElementById("pass-slash-reg");
    var passwordInputS = document.getElementById("pass-st");
    var passW = document.getElementById("passW");
    var passSlashW = document.getElementById("passW-slash");
    var passwordInputW = document.getElementById("pass-work");
    var items = document.getElementsByClassName("item");
    var hamburger = document.getElementById("hamb");
    var content = document.getElementById("main-content");
    var navbar = document.getElementById("left-menu");
    var stateHamburger = true;

    hamburger.addEventListener('click', function() {
        if(!stateHamburger) {
            hamburger.classList.remove("is-active");
            navbar.classList.remove("is-visible");
            navbar.style.height = "auto";
            content.style.filter = "none";
            content.style.pointerEvents = "auto";
            stateHamburger = !stateHamburger;
        } else {
            hamburger.classList.toggle("is-active");
            content.style.filter = "blur(10px)";
            content.style.pointerEvents = "none";
            navbar.classList.toggle("is-visible");
            if (content.clientHeight > window.innerHeight)
                navbar.style.height = content.clientHeight + "px";
            stateHamburger = !stateHamburger;
        }
    });

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

    window.onresize = function(){
        var width = window.innerWidth;
        if(width > 768 && (navbar.classList.contains("is-visible"))) {
            stateHamburger = true;
            navbar.classList.remove("is-visible");
            hamburger.classList.toggle("is-active");
        }
        if(width > 768) {
            document.body.style.overflow = "auto";
            navbar.style.height = "auto";
            content.style.pointerEvents = "auto";
            content.style = null;
        } else {
            if (content.clientHeight > window.innerHeight)
                navbar.style.height = content.clientHeight + "px";
        }
    }

    setOnClick(items, setActiveMenu);

    function resultAnimation(state, message) {
        if (state) {
            Swal.fire(
                message,
                'Натисніть "ОК" для продовження',
                'success'
            );
        } else {
            Swal.fire(
                message,
                'Натисніть "ОК" для продовження та перевірте данні',
                'error'
            );
        }
    }
    pass.addEventListener('click', function() {
        pass.classList.toggle('del-slash');
        passSlash.classList.remove('del-slash');
        passwordInputS.setAttribute('type', "text");
    });
    
    passSlash.addEventListener('click', function() {
        pass.classList.remove('del-slash');
        passSlash.classList.toggle('del-slash');
        passwordInputS.setAttribute('type', "password");
    });

    passW.addEventListener('click', function() {
        passW.classList.toggle('del-slash');
        passSlashW.classList.remove('del-slash');
        passwordInputW.setAttribute('type', "text");
    });
    
    passSlashW.addEventListener('click', function() {
        passW.classList.remove('del-slash');
        passSlashW.classList.toggle('del-slash');
        passwordInputW.setAttribute('type', "password");
    });

    btnBox[0].disabled = true;
    uploadButton.addEventListener('click', () => {
        realInput.click();
    });

    realInput.addEventListener('change', () => {
        const name = realInput.value.split(/\\|\//).pop();
        const truncated = name.length > 20 
        ? name.substr(name.length - 20) 
        : name;
        
        fileInfo.innerHTML = truncated;
    });

    uploadButtonWorker.addEventListener('click', () => {
        realInputWorker.click();
    });
    
    realInputWorker.addEventListener('change', () => {
        const name = realInputWorker.value.split(/\\|\//).pop();
        const truncated = name.length > 20 
        ? name.substr(name.length - 20) 
        : name;
        
        fileInfoWorker.innerHTML = truncated;
    });

    function setActiveBtn() {
        for (var i = 0; i < btnBox.length; i++) {
            if(btnBox[i] != this) {
                btnBox[i].classList.remove("isSelect");
            }
        }
        if(!this.classList.contains("isSelect"))
            this.classList.toggle("isSelect");

        if(this == btnBox[0]) {
            regFormWorker.classList.remove("enableWorker");
            regFormStudent.classList.toggle("enableStudent");
            btnforms[0].classList.toggle("form-active");
            btnforms[1].classList.remove("form-active");
            btnBox[0].disabled = true;
            btnBox[1].disabled = false;
        } else {
            regFormStudent.classList.remove("enableStudent");
            regFormWorker.classList.toggle("enableWorker");
            btnforms[1].classList.toggle("form-active");
            btnforms[0].classList.remove("form-active");
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
}