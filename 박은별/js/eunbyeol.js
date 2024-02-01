const styleWH = document.querySelector("#style-WH"); // 버튼
const content = document.querySelector("#content"); 


const nWidth = document.getElementById("n-width"); // 너비
const nHeight = document.getElementById("n-height"); // 높이

const fSize = document.getElementById("f-size"); // 글자크기
const fWeight = document.getElementsByName('f-weight'); // 굵기

const tColor = document.getElementById("t-color"); // 글자색
const bColor = document.getElementById("b-color"); // 배경색

const jContent = document.getElementsByName('j-content'); // 가로정렬
const alItems = document.getElementsByName('al-items'); // 세로정렬

const helloText = document.getElementById("hello-text"); // 출력 문자열


// 라디오 버튼
function checkFn(styleUp) {
    let result = "";

    for(let i = 0; i < styleUp.length; i++) {
        let checkT = styleUp[i].checked;

        if(checkT == true) {
            result = styleUp[i].value;
        }
    }

    return result;
}

// 적용하기 버튼
document.querySelector("#style-Save").addEventListener("click", () => {
    content.style.border = "3px solid black";
    content.style.width = 
        nWidth.children[0].value + nWidth.children[1].innerText.trim(); // 너비
    content.style.height = 
        nHeight.children[0].value + nHeight.children[1].innerText.trim(); // 높이

    content.style.fontSize = 
        fSize.children[0].value + fSize.children[1].innerText.trim(); // 글자크기
    
    content.style.fontWeight = checkFn(fWeight); // 굵기

    content.style.color = tColor.value; // 글자색
    content.style.backgroundColor = bColor.value; // 배경색

    
    content.style.justifyContent = checkFn(jContent); // 가로정렬
    content.style.alignItems = checkFn(alItems); // 세로정렬

    content.innerText = helloText.value;
});