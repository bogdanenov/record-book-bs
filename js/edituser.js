var pass = document.getElementById("pass-reg");
var passwordInputS = document.getElementById("pass-st");
var passSlash = document.getElementById("pass-slash-reg");
const realInput = document.getElementById("real-input");
const uploadButton = document.querySelector(".browse-btn");
const fileInfo = document.querySelector(".file-info");

pass.addEventListener("click", function() {
  pass.classList.toggle("del-slash");
  passSlash.classList.remove("del-slash");
  passwordInputS.setAttribute("type", "text");
});

passSlash.addEventListener("click", function() {
  pass.classList.remove("del-slash");
  passSlash.classList.toggle("del-slash");
  passwordInputS.setAttribute("type", "password");
});

uploadButton.addEventListener("click", () => {
  realInput.click();
});

realInput.addEventListener("change", () => {
  const name = realInput.value.split(/\\|\//).pop();
  const truncated = name.length > 20 ? name.substr(name.length - 20) : name;

  fileInfo.innerHTML = truncated;
});
