const userPw = document.getElementById("user-pw"); // 비밀번호
const userPw2 = document.getElementById("user-pw2"); // 비밀번호 확인
const pwYn = document.querySelector(".pw-yn"); // 비밀먼호 일치 문구

const nmYn = document.querySelector(".nm-yn"); // 아이디 일치 문구

const input = document.getElementsByTagName("input");
const inputChk = document.getElementsByName("gender"); // 성별체크
const tell = document.getElementById("tel"); // 전화번호

// 아이디 검사
document.getElementById("user-id").addEventListener("keyup", e => {
    const regExp = /^[a-z]{1}[a-zA-Z0-9\-\_]{5,14}$/;
    const backC = regExp.exec(e.target.value) ? "springgreen" : "transparent"

    e.target.style.backgroundColor = backC; 
})

// 비밀번호 확인
userPw2.addEventListener("keyup", e => {
    // 비밀번호 미입력
    if(userPw.value == "") {
        e.target.value = ""; // 초기화
        alert("비밀번호를 입력해주세요");
        userPw.focus();
    }

    // 비밀번호 일치여부
    if(userPw.value == userPw2.value) {
        pwYn.innerText = "비밀번호 일치";
        pwYn.classList.remove("colorN");
        pwYn.classList.add("colorY");
    } else {
        pwYn.innerText = "비밀번호가 불일치";
        pwYn.classList.remove("colorY");
        pwYn.classList.add("colorN")
    }
});


// 이름 검사
document.getElementById("user-nm").addEventListener("keyup", e => {
    const regExp = /^[가-힣]{2,5}$/;

    if(regExp.exec(e.target.value)) {
        nmYn.innerText = "정상입력";
        nmYn.classList.remove("colorN");
        nmYn.classList.add("colorY");
    } else {
        nmYn.innerText = "한글만 입력하세요";
        nmYn.classList.remove("colorY");
        nmYn.classList.add("colorN");
    }
})

// 초기화
document.getElementById("reset").addEventListener("click", () => {
    for(let i = 0; i < input.length; i++) {
        input[i].value = "";
        input[i].checked = false;
    }
});

// 회원가입
document.getElementById("join").addEventListener("click", () => {
    // 성별여부
    let chkcnt = 0;

    for(let i = 0; i < inputChk.length; i++ ) {
        if(inputChk[i].checked == true) {
            chkcnt++;
        }
    }

    if(chkcnt == 0) {
        alert("성별을 선택해주세요.");
        return;
    }

    // 전화번호여부
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$/;

    if(!regExp.exec(tell.value)) {
        console.log("ddd", tell.value);
        alert("전화번호의 형식이 올바르지 않습니다");
        return;
    }

    alert("회원가입 성공");
});