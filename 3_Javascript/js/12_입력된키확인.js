// 문자열.toLowerCase() : 영어를 모두 소문자로 변경(A -> a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경(a -> A)

// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll('.key');

// 문서(화면 전체)에서 키가 눌러지는걸 감지했을 때
document.addEventListener("keydown", function(e) {
    // const uc = e.key.toUpperCase();
    // if((uc == "Q") || (uc == "W") || (uc == "E") || (uc == "R")) {
    //     for(let i = 0; i <= 3; i++) {
    //         if(keys[i].innerText.toUpperCase() == uc) {
    //             keys[i].style.backgroundColor = "#00bcd45e";
    //         }
    //     }
    // }

    let idx; // 인덱스 값을 저장할 변수

    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
    switch(e.key.toUpperCase()) {
        case 'Q' : idx = 0; break;
        case 'W' : idx = 1; break;
        case 'E' : idx = 2; break;
        case 'R' : idx = 3; break;
        default : return; // 함수종료
    }

    // idx와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "deepPink";
}); 

// 키를 떼면 배경색 흰색으로 되돌리기
document.addEventListener("keyup", function(e) {
    // const uc = e.key.toUpperCase();
    // if((uc == "Q") || (uc == "W") || (uc == "E") || (uc == "R")) {
    //     for(let i = 0; i <= 3; i++) {
    //         if(keys[i].innerText.toUpperCase() == uc) {
    //             keys[i].style.backgroundColor = "transparent";
    //         }
    //     }
    // }
    let idx; // 인덱스 값을 저장할 변수

    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
    switch(e.key.toUpperCase()) {
        case 'Q' : idx = 0; break;
        case 'W' : idx = 1; break;
        case 'E' : idx = 2; break;
        case 'R' : idx = 3; break;
        default : return; // 함수종료q
    }

    // idx와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "white";
});