const menuItem = document.querySelectorAll(".menu-item");
const cart = document.getElementById("cart");
const emptyCart = document.getElementById("empty-cart");
const total = document.getElementById("total");

function addToCart(menu, price) {
    cart.style.display = "block";
    emptyCart.style.display = "none";

    const menuSpan2 = document.querySelectorAll('.menu-span');
    const cntSpan2 = document.querySelectorAll('.cnt-span');
    let str = total.innerText.substring(total.innerText.indexOf('₩') + 1);

    // 같은 종류 골랐을 때
    for(let i = 0; i < menuSpan2.length; i++) {
        if(menuSpan2[i].innerText == menu) {
            let num = cntSpan2[i].innerText;
            num++ ;

            cntSpan2[i].innerText = num;

            total.innerText =  "합계: ₩" + (Number(str) + Number(price));

            return;
        } 
    }

    // 다른 종류 골랐을 때
    let div = document.createElement("div");
    div.classList.add("cart-item");

    let menuSpan  = document.createElement("span");
    menuSpan.classList.add("menu-span")

    let div2 = document.createElement("div");
    div2.classList.add("quantity");

    let mBtn = document.createElement("button");
    mBtn.classList.add("m-btn");

    let cntSpan   = document.createElement("span");
    cntSpan.classList.add("cnt-span");

    let pBtn = document.createElement("button");
    pBtn.classList.add("p-btn");

    let closeSpan = document.createElement("span"); // x 버튼
    closeSpan.classList.add("delete-button"); 

    cart.append(div);
    div.append(menuSpan, div2, closeSpan);
    div2.append(mBtn, cntSpan, pBtn);


    menuSpan.innerText = menu; // 메뉴종류
    mBtn.innerText = "-"
    cntSpan.innerText = 1; // 수량
    pBtn.innerText = "+"
    closeSpan.innerHTML = '&times;'; // 메뉴 취소
    total.innerText =  "합계: ₩" + (Number(str) + Number(price)); // 총가격

    // 메뉴 취소 버튼
    closeSpan.addEventListener("click", () => {
        closeSpan.parentElement.remove();

        let str2 = total.innerText.substring(total.innerText.indexOf('₩') + 1);
        total.innerText =  "합계: ₩" + (Number(str2) - (Number(cntSpan.innerText) * Number(price))); // 총가격
    });

    // 증가 버튼
    pBtn.addEventListener("click", () => {
        let num = cntSpan.innerText;
        num++ ;

        cntSpan.innerText = num;
        
        let str2 = total.innerText.substring(total.innerText.indexOf('₩') + 1);
        total.innerText =  "합계: ₩" + (Number(str2) + Number(price)); // 총가격
    });
    
    // 감소 버튼
    mBtn.addEventListener("click", () => {
        let num = cntSpan.innerText;
        num-- ;

        cntSpan.innerText = num;
        
        let str2 = total.innerText.substring(total.innerText.indexOf('₩') + 1);
        total.innerText =  "합계: ₩" + (Number(str2) - Number(price)); // 총가격

        if(cntSpan.innerText == 0) {
            closeSpan.parentElement.remove();
        }
    });
}

