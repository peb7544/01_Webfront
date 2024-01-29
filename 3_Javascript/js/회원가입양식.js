const userPw = document.getElementById("user-pw"); // 비밀번호
const userPw2 = document.getElementById("user-pw2"); // 비밀번호 확인

// 아이디 검사
document.getElementById("user-id").addEventListener("keyup", e => {
    // const regExp = /^[a-z]{1}[a-z][A-Z][0-9]\-\_{5,14}$/;
    const regExp = /^[a-z]{1}[a-zA-Z0-9\-\_]{5,14}$/;

    console.log(regExp.test(e.target.value));

    if(regExp.exec(e.target.value)) {
        e.target.style.backgroundColor = "springgreen";
    }
    else {
        e.target.style.backgroundColor = "transparent";
    }
})

// 비밀번호 확인
userPw2.addEventListener("keyup", e => {
    // 비밀번호 미입력
    if(userPw.value == "") {
        e.target.value = ""; // 초기화
        alert("비밀번호를 입력해주세요");
        // userPw.target.style.fo
    }
});