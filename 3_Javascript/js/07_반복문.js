// for(let num =1; num <= 5; num++) {
//     // 조건식이 true인 경우 반복 수행할 코드;
//     console.log("통과!")
// }

// 12345 출력
function check1() {
    let result = ""; // 빈 문자열

    for(let num=1; num <= 5; num++) {
        // console.log(num);
        result += num;
        // result  = result + num;
        // "1"     = ""     + 1 (1턴)
        // "12"    = "1"    + 2 (2턴)
        // "123"   = "12"   + 3 (3턴)
        // "1234"  = "123"  + 4 (4턴) 
        // "12345" = "1234" + 5 (5턴)
        //                    6 (6턴)
    }

    console.log(result);
}

// 1부터 10까지 1씩 증가하며 출력
function check2() {
    for(let num=1; num <= 10; num++) {
        console.log(num);
    }
}

// 1부터 20까지 1씩 증가하며 출력
function check3() {
    for(let num=1; num <= 20; num++) {
        console.log("num : " + num);
    }
}

// 5부터 15까지 1씩 증가하며 출력
function check4() {
    for(let num=5; num <= 15; num++) {
        console.log("num : " + num);
    }
}

// 1부터 30까지 2씩 증가하며 출력
function check5() {
    for(let num=1; num <= 30; num += 2) {
        console.log("num : " + num);
    }
}

// 1부터 10까지 모든 정수의 합
function check6() {
    let sum = 0; // 합계를 저장하기 위한 변수
    for(let num=1; num <= 10; num++) {
        sum+=num;
    }

    console.log("sum : " + sum);
}

/************************************************************ */

// 입력 받은 범위 내 모든 정수의 합 구하기
function sumFn() {
    // const in1_1 = document.getElementById("inputNumber1-1");
    // const in1_2 = document.getElementById("inputNumber1-2");
    // const result1 = document.getElementById("result1");

    // let sum = 0;

    // let v1 = Number(in1_1.value);
    // let v2 = Number(in1_2.value);

    // for(let num=v1; num<=v2; num++) {
    //     sum += num;
    // }
    
    // result1.innerText = sum;

    // input에 작성된 값을 얻어와 저장
    const strat = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

    // 결과를 출력하기 위한 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;

    // start 부터 and까지 1씩 증가하는 for문
    for(let num=strat; num<=end; num++) {
        sum += num; // num 값을 sum에 누적
    }
    
    result1.innerText = sum;
}

// 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기
function executeFn2() {
    // const in2_1 = document.getElementById("inputNumber2-1");
    // const in2_2 = document.getElementById("inputNumber2-2");
    // const in2_3 = document.getElementById("inputNumber2-3");
    // const result2 = document.getElementById("result2");

    // let v1 = Number(in2_1.value);
    // let v2 = Number(in2_2.value);
    // let v3 = Number(in2_3.value);

    // let result = ""

    // for(let num=v1; num <= v2; num += v3) {
    //     result += num;
    // }

    // result2.innerText = result;

    const strat = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);

    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2"); // ul 태그

    ul.innerHTML = ""; // 이전 ul에 작성된 내용을 모두 삭제

    // start 부터 end까지 val씩 증가
    for(let num=strat; num <= end; num += val) {
        ul.innerHTML += `<li>${num}</li>`;
        // ul.innerText += `<li>${num}</li>`;
    }
}

// 요소 innerText = `<li>${num}</li>`;
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소 innerHTML = `<li>${num}</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력

// 입력 받은 단 출력하기
function executeFn3() {
    // 입력된 값(단)
    const input3 = Number(document.getElementById("input3").value);

    // 결과를 출력할 요소 ul 태그
    const ul = document.getElementById("result3");

    ul.innerHTML = ''; // 이전 내용 삭제

    // 입력 받은 단이 2~9 사이가 아닐 경우
    // "2~9 사이만 입력해주세요" 알림창 띄우기
    if( input3 < 2 || input3 > 9 ) {
        alert("2~9 사이만 입력해주세요");

        // 함수를 종료하고 호출한 곳으로 돌아감
        // 함수 종료 정도로만 인식
        return;
    }

    for(let num = 1; num <= 9; num++) {
        ul.innerHTML += `<li>${input3} x ${num} = ${input3 * num}</li>`;
    }

    // if( (2 <= input3) && (input3 <= 9) ) {
    //     for(let num = 1; num <= 10; num++) {
    //         const result = (input3 * num);
    
    //         ul.innerHTML += `<li>${input3} * ${num} = ${result}</li>`;
    //     }
    // } else {
    //     alert("단(2~9) 출력만 가능");
    // }
}

/****************************************************** */

/* 다음 모양 출력하기
    12345
    12345
    12345
    12345
*/

function check8() {
    // 4바퀴 반복하는 for문
    for(let y = 1; y <= 4; y++) {
        // "12345" 출력하는 구문
        let str = "";

        for(let x = 1; x <= 5; x++) {
            str += x;
        }

        console.log(str);
    }
}

/* 다음 모양 출력하기
    1
    12
    123
    1234
    12345
*/

function check9() {
    for(let y = 1; y <= 5; y++) {
        let str = "";

        for(let x = 1; x <= y; x++) {
            str += x
        }

        console.log(str);
    }

    // for(let num=1; num <= 5; num++) {
    //     result += num;
        
    //     console.log(result);
    // }
}

/****************************************************** */

// while 문 확인
function check16() {
    // 변수를 선언만 해두기
    let val; // undefined;

    // 취소를 누르기 전까지 반복
    // == 취소를 누르면 반복하지 않겠다.
    while(val !== null) {
        // 동일 비교 연산자
        // A != B : 값이 다를 때
        // !== : 값, 자료형이 모두 다른 경우 true
        // === : 값, 자료형이 모두 같은 경우 true

        // 변수에 prompt값 대입
        // 확인 -> 입력한 값
        // 취소 -> null
        val = prompt("입력 후 확인"); 
        
        console.log(val);
    }
}

/****************************************************** */

// 메뉴 주문하기
function check17() {
    // 메뉴 가격
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000;

    // 주문 개수 카운트
    let gCount = 0; // 김밥
    let rCount = 0; // 라면
    let dCount = 0; // 돈까스

    // prompt로 입력한 값을 저장할 변수 선언
    // 확인 -> 입력한 값
    // 취소 -> null
    let input; // undefined

    // 취소를 누르기 전까지 반복
    while(input !== null) {
        input = prompt("메뉴 번호를 입력하세요!");

        switch(input) {
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력해주세요."); break;
        }
    }

    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);
    alert(`총 가격 : ${sum} 원`);
}

/****************************************************** */

// while문을 for문 처럼 사용하기
function check18() {
    // 1부터 10까지 출력
    let num = 1;

    while(num < 11) {
        console.log(num);

        num++;
    }

    console.log("-----------------------------")

    // 10부터 1까지 1씩 감소 (while)
    let num2 = 10;

    while(num2 >= 1) {
        console.log(num2);

        num2--;
    }
}