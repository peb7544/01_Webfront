// break 확인
function check1() {
    // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i = 1; i <= 10; i++) {
        console.log("i : " + i);

        if(i == 5) break;
    }
}

// 무한 반복하는 while 문 멈추기
function check2() {

    let i = 1;
    // 10 초과 시 멈춤
    while(true) {
        // true일 때 반복 수행하는 코드
        console.log("i :  ", i++);

        if(i > 10) break;
    }
}

// conuntinue 확인하기
function check3() {
    // 1부터 20까지 출력. 단, 3의 배수는 건너뛰기
    for(let i = 1; i <= 20; i++) {
        // 3의 배수인 경우
        if(i % 3 == 0) continue;

        // 3의 배수인 경우 아래 코드는 수행하지 않음
        console.log("i :  ", i);
    }
}

/**
 * 1부터 30까지 1씩 증가며 출력
 * 단, 홀수 또는 10의 배수는 건너뛰기
 */
function check4() {
    for(let i = 1; i <= 30; i++) {
        if(i % 2 == 1 || i % 10 == 0) continue;

        console.log("i :  ", i);
    }
}

/**
 * 0 ~ 9까지 5줄 출력
 * - 각 줄에서 4의 배수는 건너뛰기
 * - 3번째 줄 출력 후 멈추기
 */
function check5() {
    for(let y = 1; y <= 5; y++) {
        let result = "";

        for(let x = 0; x <= 9; x++) {
            if(x % 4 == 0 && x != 0) continue;

            result += x;
        }

        if(y == 4) break;

        console.log("result : ", result );
    }
}

/****************************************** */

// function startGame() {
//     const result = Math.floor(Math.random() * 101);
//     let count = 0;
//     let value;
//     value = prompt("값 입력");

//     while(value !== null) {
        

//         if(result > value) {
//             value = prompt(`[UP] count = ${++count}`);
//         } else if(result < value) {
//             value = prompt(`[DOWN] count = ${++count}`);
//         }
//     }

//     if(value == null) {
//         alert("포기");
//         return;
//     } 
// }