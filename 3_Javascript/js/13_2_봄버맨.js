let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

// addEventListener("이벤트종류", 함수(이벤트가 발생했을 때 수행할 기능 ))
document.addEventListener("keydown", function(e) {
    // e : 이벤트 객체
    // console.log(e);

    const bomberman = document.getElementById("bomberman"); // 봄버맨 이미지

    switch(e.key) {
        case "ArrowRight" : 
            xindex += 10;
            break;
        case "ArrowLeft" : 
            xindex -= 10;
            break;
        case "ArrowUp" : 
            yindex -= 10;
            break;
        case "ArrowDown" : 
            yindex += 10;
            break;
        case "x" :
            const box = document.getElementById("box");
            box.innerHTML += 
                `<img src="../../images/boom.png"
                    style="transform: translate3d(${xindex}px, ${yindex}px, 0); position: absolute;"
                >`;
            break;
        default: 
            alert("방향키와 x만 가능");
            break;
    }

    bomberman.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;
});



// const bomberman = document.querySelector("#bomberman");
// const boom = document.querySelector("#boom");

// document.addEventListener("keydown", function(e) {
//     let keyup;
//     let keyleft;

//     switch(e.key) {
//         case "ArrowUp" : 
//             // 봄버맨 이동
//             if( bomberman.style.bottom == "") {
//                 bomberman.style.bottom = "0px";
//             }
//             keyup = Number(bomberman.style.bottom.replace('px',''));

//             bomberman.style.bottom = `${keyup+10}px`;
//             break;
//         case "ArrowDown" : 
//             if( bomberman.style.bottom == "") {
//                 bomberman.style.bottom = "0px";
//             }
//             keyup = Number(bomberman.style.bottom.replace('px',''));

//             bomberman.style.bottom = `${keyup-10}px`;
//             break;
//         case "ArrowRight" : 
//             console.log(bomberman.style.left);
//             if( bomberman.style.left == "") {
//                 bomberman.style.left = "0px";
//             }
//             keyright = Number(bomberman.style.left.replace('px',''));

//             bomberman.style.left = `${keyright+10}px`;
//             break
//         case "ArrowLeft" : 
//             if( bomberman.style.left == "") {
//                 bomberman.style.left = "0px";
//             }
//             keyright = Number(bomberman.style.left.replace('px',''));

//             bomberman.style.left = `${keyright-10}px`;
//             break;
//     }

//     if(e.key.toLowerCase() == "x") {
//         console.log(boom.style.boottom);
//         if(boom.style.boottom == "") {
//             boom.style.boottom = "0px"
//         }

//         if(boom.style.left == "") {
//             boom.style.left = "0px"
//         }

//         console.log(keyright);

//         boom.innerHTML += `<img id="boom" style="left:${keyright+10}px; bottom:"${keyup+10}px" src="../../images/boom.png">`;
//     }
// });
