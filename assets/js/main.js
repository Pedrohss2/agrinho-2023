let color = document.querySelector("#color");
let escolhe = document.querySelector(".escolhe")

escolhe.addEventListener('click', function() {
    window.document.body.style.backgroundColor = color.value;
});