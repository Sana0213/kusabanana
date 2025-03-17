const choices = document.querySelector(".choice")
const select = document.querySelectorAll(".g")
const enemy = document.querySelector(".enemy")
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")
const result_2 = document.querySelector(".result-2")
let selectFlag = false;
let playerChoice = "";
let enemyChoice = "";
const gu = select[0];
const tyoki = select[1];
const pa = select[2];
gu.addEventListener("click", () => {
    choices.src = gu.children[0].src
    playerChoice = "gu"
    selectFlag = true;
})
tyoki.addEventListener("click", () => {
    choices.src = tyoki.children[0].src
    playerChoice = "tyoki"
    selectFlag = true;
})
pa.addEventListener("click", () => {
    choices.src = pa.children[0].src
    playerChoice = "pa"
    selectFlag = true;
})
btn.addEventListener("click", () => {
    let waitFlag = false;
    if (selectFlag) {
        const random = Math.floor(Math.random() * select.length);
        const time = setTimeout(() => {
            waitFlag = true;
            enemy.src = select[random].children[0].src
            if (enemy.src == gu.children[0].src) {
                enemyChoice = "gu"
            } else if (enemy.src == tyoki.children[0].src) {
                enemyChoice = "tyoki"
            } else if (enemy.src == pa.children[0].src) {
                enemyChoice = "pa"
            }
            if (playerChoice == enemyChoice) {
                    result_2.textContent="あいこ"
                console.log("あいこ");
            } else if (playerChoice == "gu" && enemyChoice == "tyoki") {
                    result_2.textContent="勝ち"
                console.log("グー勝ち");
            } else if (playerChoice == "tyoki" && enemyChoice == "pa") {
                    result_2.textContent="勝ち"
                console.log("チョキ勝ち");
            } else if (playerChoice == "pa" && enemyChoice == "gu") {
                    result_2.textContent="勝ち"
                console.log("パー勝ち");
            } else {
                    result_2.textContent="負け"
                console.log("負け")
            }
            result.style.display="block"
            // if (choices.src == enemy.src) {
            //     console.log("あいこ");

            // }
            // else if (choices.scr == gu.children[0].src && enemy.src == tyoki.children[0].src) {
            //     console.log("グー勝ち");
            // }
            // else if (choices.scr == tyoki.children[0].scr && enemy.src == pa.children[0].src) {
            //     console.log("チョキ勝ち");
            // }
            // else if (choices.scr == pa.children[0].src && enemy.src == gu.children[0].src) {
            //     console.log("パー勝ち");
            // }
            // else {
            //     console.log("負け")
            // }
        }, 2000);
    } else {
        console.log("エラー");
            result_2.textContent="エラー"
            result.style.display="block"
    }
    if (!waitFlag) {
        console.log("じゃんけん");
    }
})