let color = document.querySelector("#color");
let escolhi = document.querySelector(".escolhi")

escolhi.addEventListener('click', function() {
    window.document.body.style.backgroundColor = color.value;
   
})