const box = document.querySelectorAll('.box');
const colorInput = document.querySelectorAll('.color-input');
const changeBtn = document.querySelector('#changeButton');

changeBtn.addEventListener("click", function(e) {
    // for(let i = 0; i <= 4; i++) {
    //     box[i].style.backgroundColor = colorInput[i].value;
    // }
    for(let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = colorInput[i].value;
    }
});