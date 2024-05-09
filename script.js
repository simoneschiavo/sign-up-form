const pwd = document.querySelector("input[name=pwd]");
const confirmPwd = document.querySelector("input[name=confirm_pwd]");
const validationError = document.querySelector(".validation-error");

confirmPwd.addEventListener("keyup", (e) => {
    if (pwd.value !== confirmPwd.value) {
        validationError.style.display = "block";
    } else {
        validationError.style.display = "none"
    };
});
