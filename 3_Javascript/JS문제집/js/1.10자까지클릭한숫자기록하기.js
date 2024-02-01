const number = document.querySelectorAll(".number");
const result = document.querySelector("#result");

// 10자까지 숫자 클릭하기
for(let i = 0; i < number.length; i++ ) {
    number[i].addEventListener("click", () => {
       
        if(result.innerText.length < 10) {
            if(i != 9) {
                result.innerText += (i+1);
            }
            else {
                result.innerText += 0;
            }
        } else {
            alert("10자까지만 숫자 클릭이 가능합니다.");
        }

    });
}

// 초기화 버튼
document.querySelector("#reset").addEventListener("click", () => {
    result.innerText = "";
});