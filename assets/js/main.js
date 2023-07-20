let color = window.document.querySelector("#color");
let escolhe = window.document.querySelector(".escolhe")

escolhe.addEventListener('click', function() {
    document.body.style.backgroundColor = color.value;
});


