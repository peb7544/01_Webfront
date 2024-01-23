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

function executeFn3() {
    const input3 = Number(document.getElementById("input3").value);
    const ul = document.getElementById("result3");

    ul.innerText = '';

    if( (2 <= input3) && (input3 <= 9) ) {
        for(let num = 1; num <= 10; num++) {
            const result = (input3 * num);
    
            ul.innerHTML += `<li>${input3} * ${num} = ${result}</li>`;
        }
    } else {
        alert("단(2~9) 출력만 가능");
    }
}