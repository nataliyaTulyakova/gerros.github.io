const modal = document.getElementById('logModal');
const form = document.getElementById('loginForm');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const rememberCheckBox = document.getElementById('remember');
const greetingMess = document.getElementById('greeting');
const closeBtn = document.getElementById('closeModalBtn');


document.addEventListener("DOMContentLoaded", () => {
    modal.showModal();

    const savedLogin = localStorage.getItem("login");
    const rememberMe = localStorage.getItem("rememberMe") === "true";

    if (rememberMe && savedLogin !== null) {
        loginInput.value = savedLogin;
        rememberCheckBox.checked = true;
        greetingMess.textContent = "Welcome back!";
        greetingMess.className = "greeting welcome";
    } else {
        loginInput.value = "";
        rememberCheckBox.checked = false;
        greetingMess.textContent = "Please log in!";
        greetingMess.className = "greeting login";
    }
});


rememberCheckBox.addEventListener("change", () => {
   // console.log("Галочка:", rememberCheckBox.checked);

    if (!rememberCheckBox.checked) {
        localStorage.removeItem("login");
        localStorage.removeItem("rememberMe");
    } else {
        localStorage.setItem("login", loginInput.value);
        localStorage.setItem("rememberMe", true);
    }

    // console.log("Збережений логін:",
    // localStorage.getItem("login"));
});


let elementsToValidate = document.querySelectorAll("[data-valid='true']");

elementsToValidate.forEach(element => {
    element.addEventListener("input", onChangeHandler);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Перевіряємо поля форми
    let isValid = true;
    for (const element of elementsToValidate) {
        if (!validateElement(element)) {
            isValid = false;
        }
    }
    if (!isValid) return;

    if (rememberCheckBox.checked) {
        localStorage.setItem("login", loginInput.value);
        localStorage.setItem("rememberMe", "true");
    } else {
        localStorage.removeItem("login");
        localStorage.removeItem("rememberMe");
    }
    alert("Вхід успішний!");
    form.reset();
    modal.close();
});

closeBtn.addEventListener("click", () => {
    modal.close();
});

function onChangeHandler(e) {
    const element = e.target;
    if (element.tagName == "INPUT") {
        validateElement(element);
    }
}

function validateElement(element) {
    for (const key in validators) {
        if (Object.hasOwn(validators, key) && typeof validators[key] == "object") {
            if (element.dataset[key]) {
                const validator = validators[key];
                if (!validator.isValid(element))
                    return false;
            }
        }
    }
    return true;
}

let validators = {};

validators.required = {
    isValid: function (element) {
        let message = element.dataset.required;
        return validators.validate(element, message, () => element.value.length > 0);
    }
};
validators.minLength = {
    isValid: function (element) {
        const minLen = element.dataset.minLength;
        let message = "Введене значення повинно бути не менше " + minLen;
        return validators.validate(element, message, () => element.value.length >= minLen);
    }
}
validators.pattern = {
    isValid: function (element) {
        let message = "Введене значення не відповідає правилам";
        let regex = new RegExp(element.dataset.pattern);
        return validators.validate(element, message, () => regex.test(element.value));
    }
};

validators.confirm = {
    isValid: function (element) {
        let message = "Значення не співпадають";
        let confirmInput = document.querySelector("#" + element.dataset.confirm);
        return validators.validate(element, message, () => element.value == confirmInput.value);
    }
};

validators.validate = function (element, message, predicate) {
    let errorLabel = document.querySelector("#" + element.dataset.errorLabel);
    errorLabel.innerHTML = message;
    errorLabel.style.display = "none";
    element.classList.remove("valid");
    element.classList.remove("invalid");

    if (typeof predicate == "function" && predicate()) {
        element.classList.add("valid");
        return true;
    }
    else {
        element.classList.add("invalid");
        errorLabel.style.display = "block";
        return false;
    }
};
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.dataset.target;
        const passwordInput = document.getElementById(targetId);
        const eyeclosedIcon = button.querySelector('svg.eye-closed');
        const eyeopenIcon = button.querySelector("svg.eye-open");
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        }
        else {
            passwordInput.type = 'password';
        }
        eyeclosedIcon.classList.toggle('hidden');
        eyeopenIcon.classList.toggle('hidden');
    });
});