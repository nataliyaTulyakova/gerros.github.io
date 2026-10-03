'use strict';
const btnPrime = document.querySelector(".btn-primary");
const elemAlert = document.querySelector("#alert");
btnPrime.onclick = function () {
    elemAlert.classList.add("alert-primary");
    elemAlert.textContent = "A simple primary alert—check it out!";
};
const initialClasses = "alert mt-5";
const btnSec = document.querySelector(".btn-secondary");
btnSec.addEventListener("click", function () {
    elemAlert.classList.add("alert-primary");
    elemAlert.textContent = "A simple secondary alert—check it out!";
});

const btnSuccess = document.querySelector(".btn-success");
btnSuccess.addEventListener("mouseover", function () {
    elemAlert.classList.add("alert-success");
    elemAlert.textContent = "A simple success alert—check it out!";
});
btnSuccess.addEventListener("mouseout", function () {
    elemAlert.classList.remove("alert-success");
    elemAlert.className = initialClasses;
    elemAlert.textContent = "";
});

const btnDanger = document.querySelector(".btn-danger");
btnDanger.addEventListener("focus", function () {
    elemAlert.classList.add("alert-danger");
    elemAlert.textContent = "A simple danger alert—check it out!";
})
btnDanger.addEventListener("focusout", function () {
    elemAlert.classList.remove("alert-danger");
    elemAlert.className = initialClasses;
    elemAlert.textContent = "";
})

const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");
document.body.classList.remove("dark-mode");
btnLight.addEventListener("click", function () {
    this.style = "display: none;";
    btnDark.style = "display: inline-block;";
    toggleMode();
});
btnDark.addEventListener("click", function () {
    this.style = "display: none;";
    btnLight.style = "display: inline-block;";
    toggleMode();
});
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}
const btnInfo = document.querySelector(".btn-info");
btnInfo.addEventListener("keypress", function (event) {
    if (event.code == "Enter") {
        event.preventDefault();
        elemAlert.classList.add("alert-info");
        elemAlert.textContent = "A simple info alert—check it out!";
    }
});

const cards = document.querySelectorAll(".card");
cards.forEach(elem => {
    if (elem.classList.contains('card-title')) {
        console.log(`елемент з класом "card-title" ${elem.textContent}`);
    }
    const elemChildren = elem.querySelectorAll('.card-title');
    if (elemChildren.length != 0) {
        elemChildren.forEach(child => {
            console.log(`вміст елемента з класом "card-title:" ${child.textContent}`);
        })
    }
});

cards.forEach(elem => {
    const btnAddToCart = elem.querySelector("a.add-to-cart");
    btnAddToCart.onclick = function () {
        const elemsCardTitle = elem.querySelectorAll('.card-title');
        if (elemsCardTitle.length != 0) {
            elemsCardTitle.forEach(elem => {
                console.log(elem.textContent);
            })
        }
    }
});