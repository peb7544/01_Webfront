// 요소.remove() : 요소제거
// 요소.classList.add("클래스명") : 클래스 추가
// 요소.classList.remove("클래스명") : 클래스 제거

// 만들려는 기능 중 공통적으로 사용되는 요소를 전역 변수 선언
// 최종적으로 동적으로 만들어진 요소를 붙어야하는 요소
const container = document.querySelector(".container"); // div

// 추가버튼 : input + button 추가
document.querySelector('#add').addEventListener("click", () => {
    // div 생성
    // 1. div 요소 생성하기
    const row = document.createElement("div"); // <div></div>

    // 2. 요소에 class 추가하기
    row.classList.add("row"); // <div class="row"></div>
    

    // input 생성
    // 3. input 요소 생성하기
    const inputNumber = document.createElement("input"); // <input>

    // 4. type="number" 추가
    // inputNumber.type = "number";
    inputNumber.setAttribute("type", "number"); // <input type="number">

    // 5. input class 추가하기
    // setAttribute()은 class 추가 X 덮어씌움
    // inputNumber.classList.add("input-number");  
    inputNumber.setAttribute("class", "input-number"); // <input type="number" class="input-number">
    
    // x 버튼 생성
    // 6. span 요소 생성하기
    const removeRow = document.createElement("span"); // <span></span>

    // 7. span class 추가하기
    removeRow.classList.add("remove-row"); // <span class="remove-row"></span>

    // 8. 내용으로 $times; 추가 (innerHTML 사용)
    removeRow.innerHTML = '&times;'; // <span class="remove-row">&times;</span>

    // 조립하기
    // 9. div.row 요소에게 자식으로 input, span 추가
    row.append(inputNumber, removeRow);

    // 10. 완성된 div.row를 container의 마지막 자식으로 추가하기
    container.append(row);

    //***************************
    // 클릭된 x 버튼의 부모 요소를 제거
    // 1.만들어지는 x 버튼(span)에 이벤트 리스너 추가
    removeRow.addEventListener("click", e => {
        // 2. 현재 이벤트가 발생한 요소(클릭된 x버튼)의 부모 요소를 선택(탐색)
        const parent = e.target.parentElement; // == div.row

        // 3. 부모 요소를 제거하기
        parent.remove();
    });
});

// 계산버튼
document.querySelector('#calc').addEventListener("click", () => {
    // 1. 모든 input-number 얻어오기
    const inputArr = document.querySelectorAll(".input-number");

    // 2. for문으로 모든 요소 접근하여
    // 작성된 값(value)을 얻어와
    // 숫자로 변경(Number())한 후
    // 합계 저장 변수 sum에 누적
    let sum = 0;

    for(let i = 0; i < inputArr.length; i++) {
        sum += Number(inputArr[i].value);
    }

    // 3. for문 끝나면 alert 결과 출력
    alert(`결과 : ${sum}`);
});