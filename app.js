const buttons = document.querySelectorAll("button"),
    container = document.querySelector(".container");

buttons.forEach((button) => {
    button.addEventListener("click", (el) => {
        container.style.backgroundColor = el.target.innerHTML;
    })
});