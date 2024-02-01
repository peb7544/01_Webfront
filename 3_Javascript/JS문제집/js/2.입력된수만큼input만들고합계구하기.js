const btn = document.getElementById("btn");
const container = document.getElementById("container");

const result = document.getElementById("result");

// input 생성
btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;

    // <input type="number" class="input-number">
    for(let i = 0; i < input.value; i++) {
        const inputNum = document.createElement("input");
        
        inputNum.classList.add("input-number");
        inputNum.type = "number";

        container.append(inputNum);
    }
});

// 아래 입력된 숫자 모두 더하기
document.getElementById("sumBtn").addEventListener("click", () => {
    const inpuNumber = document.querySelectorAll(".input-number");
    let cnt = 0;

    for(let i = 0; i < inpuNumber.length; i++) {
        cnt += Number(inpuNumber[i].value);
    }

    result.innerText = cnt;
});