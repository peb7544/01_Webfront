const lottoBoard = document.getElementById("lottoBoard");

// 로또판 생성
document.getElementById("createBtn").addEventListener("click", () => {
    let cnt = 0;

    for(let i = 1; i <= 45; i++) {
        const span = document.createElement("span")

        span.classList.add("number");
        lottoBoard.append(span);

        span.innerText = i;
    }

    const number = document.querySelectorAll(".number");
    let activeCnt = 0;

    for(let a = 0; a < number.length; a++) {
        // 로또 번호 클릭
        number[a].addEventListener("click", () => {
            const active = document.querySelectorAll;

            // 로또 번호 선택 취소
            if(number[a].className.includes("active") == true) {
                console.log(number[a].className);
                number[a].classList.remove("active");

                activeCnt -= 1;

                return;
            }

            //로또 번호 6개 클릭
            if(activeCnt < 6 ) {
                number[a].classList.add("active");
                activeCnt += active.length;
            }
        });
    }
});