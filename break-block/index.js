/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas")
canvas.width = 500
canvas.height = 500
const ctx = canvas.getContext("2d")



const radius = 50
let x = radius
let y = radius
let speedX = 5
let speedY = 5
setInterval(() => {
    ctx.fillStyle = 'red';
    ctx.beginPath
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath(); // 新しいパスを開始

    ctx.fillStyle = 'white'; // 塗りつぶしの色を青に設定
    ctx.arc(x, y, radius, 0, Math.PI * 2,false); // 中心(400, 300)、半径50の円を描画
    ctx.fill(); // 円を塗りつぶす
    ctx.closePath
    x += speedX
    y += speedY
    if (x <= 0 + radius || x + radius >= canvas.width){
        speedX = -speedX
    }
    if (y <= 0 + radius || y + radius >= canvas.height){
        speedY = -speedY
    }

}, 10)
