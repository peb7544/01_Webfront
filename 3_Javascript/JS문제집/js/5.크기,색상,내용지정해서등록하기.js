const size = document.getElementById("size");
const color = document.getElementById("color");
const content = document.getElementById("content");
const result = document.getElementById("result");

// 스타일 지정
function fontId(fontId) {
    fontId.style.fontSize = size.value + "px";
    fontId.style.color = color.value;
}

// 적용
document.getElementById('apply').addEventListener("click", () => {
    fontId(content);
});

// 등록
document.getElementById('registration').addEventListener("click", () => {
    result.innerText = content.value;
    fontId(result);
});
