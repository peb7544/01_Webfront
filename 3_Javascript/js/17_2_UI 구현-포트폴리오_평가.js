const numbers = document.querySelectorAll(".numbers"); // 전화번호 숫자 버튼
const phoneInput = document.getElementById("phone-input"); // 전화번호 출력
const phoneNumbers = document.getElementById("phone-numbers"); // 전화번호 목록

let num = "";

// 전화번호 입력
(() => {
    for(let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", () => {
            num += numbers[i].innerText;
            phoneInput.innerText = num;
        });

        numbers[i].addEventListener("mouseover", () => {
            numbers[i].style.backgroundColor = "#bbb";
        });

        numbers[i].addEventListener("mouseout", () => {
            numbers[i].style.backgroundColor = "transparent";
        });
    }
})()

// 키보드로 입력
function keyColor(key, color, numYn) {
    let index;
    
    switch(key) {
        case "1" : index = 0; break;
        case "2" : index = 1; break;
        case "3" : index = 2; break;
        case "4" : index = 3; break;
        case "5" : index = 4; break;
        case "6" : index = 5; break;
        case "7" : index = 6; break;
        case "8" : index = 7; break;
        case "9" : index = 8; break;
        case "#" : index = 9; break;
        case "0" : index = 10; break;
        case "*" : index = 11; break;
        default : return;
    }

    console.log(key);

    console.log(numYn);
    if(numYn != "") {
        // 전화번호 입력
        num += numYn;
        phoneInput.innerText = num;
    }

    // 전화번호 색상
    numbers[index].style.backgroundColor = color;
}

document.addEventListener("keydown", e => {
    keyColor(e.key, "#bbb", "");
})

document.addEventListener("keyup", e => {
    // e.key가 2개인 이유 : keydown으로 인해 두번의 값이 나오기 때문
    keyColor(e.key, "transparent", e.key);
})

// 번호초기화
function numClear() {
    num = "";
    phoneInput.innerText = num;
}

// 추가버튼
/*
    <div class="numbers-list">
        <span class="num-span">01072327544</span>
        <button class="star-img">
            <img class="star-white" src="../../images/phone/white_star.png">
        </button>
    <button class="close-btn">&times;</button> 
*/
document.querySelector("#add").addEventListener( "click", () => {
    if(num != "") {
        // div 생성
        const box = document.createElement("div");
        box.classList.add("numbers-list");

        // div2 생성
        const box2 = document.createElement("div");
        box2.classList.add("num-spant");
        box2.innerText = num;

        // // button 생성
        // const btn = document.createElement("button");
        // btn.classList.add("star-img");

        // button 생성-이미지
        const img = document.createElement("img");
        img.classList.add("star-white");
        img.setAttribute("src", "../../images/phone/white_star.png");


        // button2 생성
        const btn2 = document.createElement("button");
        btn2.classList.add("close-btn");
        btn2.innerHTML = "&times;";
        
        // 조합
        phoneNumbers.append(box); // div
        box.append(box2, img, btn2); // span, button
        // btn.append(img);

        // 번호초기화
        numClear();

        // x 버튼
        btn2.addEventListener("click", e => {
            // 전화번호 목록 삭제
            const delBtn = e.target.parentElement;
            delBtn.remove();
        });

        // 즐겨찾기
        img.addEventListener("click", e => {
            // 이미지 변경
            const starBtn = e.target;

            if(img.className == "star-white") {
                starBtn.setAttribute("class", "star-yellow");
                starBtn.setAttribute("src", "../../images/phone/yellow_star.png");
                box2.style.color = "red";

            } else if(img.className == "star-yellow") {
                starBtn.setAttribute("class", "star-white");
                starBtn.setAttribute("src", "../../images/phone/white_star.png");
                box2.style.color = "black";
            }
        })
    } else {
        alert("전화번호를 입력해주세요!");
    }
} );

// 초기화 버튼
document.querySelector("#clear").addEventListener("click", () => {
    // 번호초기화
    numClear();
})