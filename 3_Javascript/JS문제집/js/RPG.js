const player = {
    name: "",
    job: "",
    gender: "",
    level: 1,
    hp: 100,
    attack: 10,
    defense: 5,
    exp: 0,
    gold: 0,
    weapon: null,
    armor: null
};

const monster = {
    name: "Goblin",
    hp: 20,
    attack: 8,
    defense: 2,
    expReward: 15,
    dropRate: 0.5
};

const items = {
    sword: { name: "검", attackBonus: 5, price: 20 },
    shield: { name: "방패", defenseBonus: 3, price: 15 },
    potion: { name: "물약", hpBonus: 20, price: 10 }
};

// 캐릭터 정보
const info = document.getElementById("info");
const infoChar = document.getElementById("info-char");

// 전투
const battle = document.getElementById('battle');

// 상점
const shop = document.getElementById("shop");

(()=> {
    info.firstElementChild.innerHTML = 
                    `<span class="info-text">이름 : ${player.name}</span>
                    <span class="info-text">직업 : ${player.job}</span>
                    <span class="info-text">성별 : ${player.gender}</span>
                    <span class="info-text">레벨 : ${player.level}</span>
                    <span class="info-text">HP : ${player.hp}</span>
                    <span class="info-text">공격력 : ${player.attack}</span>
                    <span class="info-text">방어력 : ${player.defense}</span>
                    <span class="info-text">경험치 : ${player.exp}</span>
                    <span class="info-text">골드 : ${player.gold}</span>`;

    shop.innerHTML +=
            `<ul>
            <li class="shop-text">
                sword(${items.sword.name}) : <br>
                attackBonus(공격력): ${items.sword.attackBonus} <br>
                price(가격) : ${items.sword.price}
            </li>
            <li class="shop-text">
                shield(${items.shield.name}) : <br>
                defenseBonus(방어력) : ${items.shield.defenseBonus} <br>
                price(가격) : ${items.shield.price} 
            </li>
            <li class="shop-text">
                potion(${items.potion.name}) : <br>
                hpBonus(HP) : ${items.potion.hpBonus} <br>
                price(가격) : ${items.potion.price}
            </li>
            </ul>`;
})();

// 케릭터 생성
document.getElementById("create-char").addEventListener("click", () => {
    let character1 = prompt("캐릭터 이름을 입력하세요.");
    
    if(character1 == null) {
        return
    } else if(character1 == "") {
        alert("캐릭터 이름을 입력하세요.");
        return;
    } 

    let character2 = prompt("캐릭터 직업(마법사, 전사)을 입력하세요.");
    
    if(character2 == null) {
        return
    } else if( character2 != "마법사" && character2 != "전사" && character2 == "" ) {
        alert("마법사 또는 전사를 입력해주세요.");
        return;
    }

    let character3 = prompt("성별(남자, 여자)을 입력하세요.");

    if(character3 == null) {
        return
    } if(character3 != "남자" && character3 != "여자" && character3 == "") {
        alert("남자 또는 여자를 입력해주세요.");
        return;
    }

    // 입력한 정보 넣기
    const infoText = document.querySelectorAll(".info-text");

    player.name = character1;
    infoText[0].innerText = `이름 : ${player.name}`

    player.job = character2;
    infoText[1].innerText = `직업 : ${player.job}`

    player.gender = character3;
    infoText[2].innerText = `성별 : ${player.gender}`

    // 캐릭터 생성
    const infoImg = document.createElement('img');
    infoImg.setAttribute('src', `../../images/rpg/${player.gender}_${player.job}.png`);
    infoChar.append(infoImg);
});

// 플레이어 아이템 소비
function itemInfo(random, infoText) {
    let pItem = '';

    switch (random) {
        case "sword" :
            let pAttack = Number(player.attack) + Number(items.sword.attackBonus);
            pItem = items.sword.name
            
            player.attack = pAttack;
            infoText[5].innerText = `공격력 : ${player.attack}`;

            break;
        case "shield" :
            let pDefense = Number(player.defense) + Number(items.shield.defenseBonus);
            pItem = items.shield.name
            
            player.defense = pDefense;
            infoText[6].innerText = `방어력 : ${player.defense}`;

            break;
        case "potion" :
            let pHp2 = Number(player.hp) + Number(items.potion.hpBonus);
            pItem = items.potion.name
            
            player.hp = pHp2;
            infoText[4].innerText = `HP : ${player.hp}`;

            break;
    }

    return pItem
}

// 전투시작
document.getElementById("start").addEventListener("click", () => {
    // 캐릭터 생성X
    // if(player.name == "") {
    //     alert("캐릭터가 생성되지 않았습니다.");
    //     return;
    // }

    // 공격
    console.log("re : " + monster.hp);
    const infoText = document.querySelectorAll(".info-text");

    let pAttack = Number(player.attack) - Number(monster.defense);

    battle.innerHTML += `${player.name}님이 ${monster.name}을(를) ${pAttack} 공격합니다. <br>`;
    
    let mHp = Number(monster.hp) - pAttack;
    monster.hp = mHp

    let mAttack = Number(monster.attack) - Number(player.defense);

    battle.innerHTML += `${monster.name}이(가) ${player.name}님이 ${mAttack} 공격합니다. <br>`;
    
    let pHp = Number(player.hp) - mAttack;
    player.hp = pHp
    infoText[4].innerText = `HP : ${player.hp}`;

    // 전투 종료 결과
    if( player.hp <= 0) {
        battle.innerHTML += `전투에서 패배했습니다. <br>`;

        return;
    } 
    
    if( monster.hp < 0 ) { 
        // 경험치
        let pExp = Number(player.exp) + Number(monster.expReward);
        
        battle.innerHTML += `몬스터를 처치했습니다 ${pExp} 경험치 획득! <br>`;
        player.exp = pExp
        infoText[7].innerText = `경험치 : ${player.exp}`;

        // 골드
        let pGold = Number(player.gold) + 5;
        player.gold = pGold;
        infoText[8].innerText = `골드 : ${player.gold}`;

        // 아이템 드랍
        const randomNum = Math.round(Math.random() * 10) / 10;
        // console.log(randomNum);
        if(randomNum < 0.5) {
            let item = ["sword", "shield", "potion"];
            const randomItems = item[Math.floor(Math.random() * item.length)];
            
            let pItem = itemInfo(randomItems, infoText);

            battle.innerHTML += `${player.name}님이 ${pItem}을(를) 드롭했습니다. <br>`;
            battle.innerHTML += `획득한 아이템 : ${pItem} <br>`;
            battle.innerHTML += `${player.name}님이 ${pItem}을(를) 자동으로 소비했습니다. <br>`;
        }

        battle.innerHTML += "-------------[전투 종료]----------------- <br>";

        monster.hp = 20;
    }
});

// 아이템구매
document.getElementById("buy").addEventListener("click", () => {
    // 캐릭터 생성X
    if(player.name == "") {
        alert("캐릭터가 생성되지 않았습니다.");
        return;
    }
    
    // const infoText = document.querySelectorAll(".info-text");

    // player.gold = 10;
    // infoText[8].innerText = `골드 : ${player.gold}`;

    let itemBuy = prompt("아이템 목록에 있는 구매할 아이템(sword,shield,potion)을 입력하세요.");

    if(itemBuy != "sword" && itemBuy != "shield" & itemBuy != "potion") {
        alert("아이템 sword,shield,potion 중 하나를 입력하세요.");

        return;
    }

    // 가격 비교
    let pGold = player.gold;
    let itemPrice = (itemBuy == "sword" ? items.sword.price :
                        itemBuy == "shield" ? items.shield.price : items.potion.price);

    if(pGold < itemPrice) {
        alert("소유한 골드가 아이템의 가격보다 커야만 구매 할 수 있습니다.");

        return;
    }

    // 구매
    const infoText = document.querySelectorAll(".info-text");

    let pItem = itemInfo(itemBuy, infoText);

    battle.innerHTML += `${player.name}님이 ${pItem}을(를) 구매했습니다. <br>`;
    battle.innerHTML += `획득한 아이템 : ${pItem} <br>`;
    battle.innerHTML += `${player.name}님이 ${pItem}을(를) 자동으로 소비했습니다. <br>`;

    // 골드
    pGold = Number(player.gold) - Number(itemPrice);
    player.gold = pGold;
    infoText[8].innerText = `골드 : ${player.gold}`;

});