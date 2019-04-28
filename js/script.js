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
            hamburger.classList.toggle("is-active");
            navbar.classList.remove("is-visible");
            content.style.filter = "blur(10px)";
            document.body.style.overflow = "hidden";
            stateHamburger = !stateHamburger;
        } else {
            hamburger.classList.remove("is-active");
            content.style.filter = "none";
            document.body.style.overflow = "auto";
            navbar.classList.toggle("is-visible");
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
            content.style = null;
        } else {
            document.body.style.overflow = "hidden";
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

    MaskedInput({
        elm: document.getElementById('phone'),
        format: '+38 (0__) ___-__-__',
        separator: '+38 (0)-'
    });

     MaskedInput({
        elm: document.getElementById('phone-worker'),
        format: '+38 (0__) ___-__-__',
        separator: '+38 (0)-'
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



(function(a){a.MaskedInput=function(f){if(!f||!f.elm||!f.format){return null}if(!(this instanceof a.MaskedInput)){return new a.MaskedInput(f)}var o=this,d=f.elm,s=f.format,i=f.allowed||"0123456789",h=f.allowedfx||function(){return true},p=f.separator||"/:-",n=f.typeon||"_YMDhms",c=f.onbadkey||function(){},q=f.onfilled||function(){},w=f.badkeywait||0,A=f.hasOwnProperty("preserve")?!!f.preserve:true,l=true,y=false,t=s,j=(function(){if(window.addEventListener){return function(E,C,D,B){E.addEventListener(C,D,(B===undefined)?false:B)}}if(window.attachEvent){return function(D,B,C){D.attachEvent("on"+B,C)}}return function(D,B,C){D["on"+B]=C}}()),u=function(){for(var B=d.value.length-1;B>=0;B--){for(var D=0,C=n.length;D<C;D++){if(d.value[B]===n[D]){return false}}}return true},x=function(C){try{C.focus();if(C.selectionStart>=0){return C.selectionStart}if(document.selection){var B=document.selection.createRange();return -B.moveStart("character",-C.value.length)}return -1}catch(D){return -1}},b=function(C,E){try{if(C.selectionStart){C.focus();C.setSelectionRange(E,E)}else{if(C.createTextRange){var B=C.createTextRange();B.move("character",E);B.select()}}}catch(D){return false}return true},m=function(D){D=D||window.event;var C="",E=D.which,B=D.type;if(E===undefined||E===null){E=D.keyCode}if(E===undefined||E===null){return""}switch(E){case 8:C="bksp";break;case 46:C=(B==="keydown")?"del":".";break;case 16:C="shift";break;case 0:case 9:case 13:C="etc";break;case 37:case 38:case 39:case 40:C=(!D.shiftKey&&(D.charCode!==39&&D.charCode!==undefined))?"etc":String.fromCharCode(E);break;default:C=String.fromCharCode(E);break}return C},v=function(B,C){if(B.preventDefault){B.preventDefault()}B.returnValue=C||false},k=function(B){var D=x(d),F=d.value,E="",C=true;switch(C){case (i.indexOf(B)!==-1):D=D+1;if(D>s.length){return false}while(p.indexOf(F.charAt(D-1))!==-1&&D<=s.length){D=D+1}if(!h(B,D)){c(B);return false}E=F.substr(0,D-1)+B+F.substr(D);if(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1){D=D+1}break;case (B==="bksp"):D=D-1;if(D<0){return false}while(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1&&D>1){D=D-1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);break;case (B==="del"):if(D>=F.length){return false}while(p.indexOf(F.charAt(D))!==-1&&F.charAt(D)!==""){D=D+1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);D=D+1;break;case (B==="etc"):return true;default:return false}d.value="";d.value=E;b(d,D);return false},g=function(B){if(i.indexOf(B)===-1&&B!=="bksp"&&B!=="del"&&B!=="etc"){var C=x(d);y=true;c(B);setTimeout(function(){y=false;b(d,C)},w);return false}return true},z=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if((C.metaKey||C.ctrlKey)&&(B==="X"||B==="V")){v(C);return false}if(C.metaKey||C.ctrlKey){return true}if(d.value===""){d.value=s;b(d,0)}if(B==="bksp"||B==="del"){k(B);v(C);return false}return true},e=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if(B==="etc"||C.metaKey||C.ctrlKey||C.altKey){return true}if(B!=="bksp"&&B!=="del"&&B!=="shift"){if(!g(B)){v(C);return false}if(k(B)){if(u()){q()}v(C,true);return true}if(u()){q()}v(C);return false}return false},r=function(){if(!d.tagName||(d.tagName.toUpperCase()!=="INPUT"&&d.tagName.toUpperCase()!=="TEXTAREA")){return null}if(!A||d.value===""){d.value=s}j(d,"keydown",function(B){z(B)});j(d,"keypress",function(B){e(B)});j(d,"focus",function(){t=d.value});j(d,"blur",function(){if(d.value!==t&&d.onchange){d.onchange()}});return o};o.resetField=function(){d.value=s};o.setAllowed=function(B){i=B;o.resetField()};o.setFormat=function(B){s=B;o.resetField()};o.setSeparator=function(B){p=B;o.resetField()};o.setTypeon=function(B){n=B;o.resetField()};o.setEnabled=function(B){l=B};return r()}}(window));