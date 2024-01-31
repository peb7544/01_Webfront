const fruit = document.querySelectorAll(".fruit");
//const input = document.getElementsByTagName("input");
const result = document.getElementById("result");

document.getElementById("btn").addEventListener("click", () => {
    let sum = "";
    let fruitNm = ""; // 과일 이름
    let fruitCnt = ""; // 과일 개수
    let fruitSum = 0; 

    for(let i = 0; i < fruit.length; i++) {
        if(fruit[i].checked == true) {
            let cnt = fruit[i].nextElementSibling.nextElementSibling.nextElementSibling.value;

            fruitNm = fruit[i].nextElementSibling.innerText;
            fruitCnt = cnt;
            fruitSum += Number(fruit[i].nextElementSibling.nextElementSibling.innerText) * Number(cnt);

            console.log(fruitSum);

            sum += `${fruitNm} ${fruitCnt}개 `
        }

        result.innerText = `${sum}총합 ${fruitSum}원`;
    }
});