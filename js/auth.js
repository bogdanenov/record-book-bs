window.onload = function() {
    var blockError = document.getElementById("error");
    var pass = document.getElementById("pass");
    var passSlash = document.getElementById("pass-slash");
    var passwordInput = document.getElementById("passlogin");

    pass.addEventListener('click', function() {
        pass.classList.toggle('del-slash');
        passSlash.classList.remove('del-slash');
        passwordInput.setAttribute('type', "text");
    });
    
    passSlash.addEventListener('click', function() {
        pass.classList.remove('del-slash');
        passSlash.classList.toggle('del-slash');
        passwordInput.setAttribute('type', "password");
    });
    
    function enableError() {
        blockError.classList.toggle("error-alert");
    }

    function disableError() {
        blockError.classList.remove("error-alert");
    }
}