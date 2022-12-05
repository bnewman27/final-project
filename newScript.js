// Canvas Setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500; 
let HighScore = 0;
let gameFrame = 0;
ctx.font = "35px courier new"
let gameSpeed = 1;
let gameOver = false;
// Mouse Interactivity
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
    x: canvas.width/20,
    y: canvas.height/20,
    click: false
}
canvas.addEventListener('mousedown', function(event) {
    mouse.click = true;  
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
    
});
canvas.addEventListener('mouseup', function() {
    mouse.click = false;
});
// Player
const playerImage = new Image();
playerImage.src = '/assets/sprite/spriteSub/killerstar.gif';
// playerImage.src = '/assets/sprite/spriteSub/blackhole.gif';
// ****    add cursor effects    ****
class playerOne {
    constructor(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.radius = 30;
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spritewidth = 300;
        this.spriteheigth = 300;
    }
    update(){
        const dx =  this.x - mouse.x;
        const dy = this.y - mouse.y;
        
        if (mouse.x != this.x) {
            this.x -= dx/10; 
        }
        if (mouse.y != this.y) {
            this.y -= dy/10;
        }
    
    }
    draw(){
        if(mouse.click) {
            ctx.lineWidth = 0.2 
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.fillRect(this.x, this.y, this.radius, 10);
        ctx.drawImage(playerImage, this.x-70, this.y-76.7, this.radius * 5, this.radius * 5);
        ctx.save();
        
       
    }
}
const player = new playerOne();
// enemies

// enemy 01
const enemyImage01 = new Image();
enemyImage01.src = 'assets/shuttle-side.png';
class Enemy01 {
    constructor(){
        this.x = canvas.width + 200;
        this.y = Math.random() * (canvas.height - 150) + 90;
        this.radius = 30;
        this.speed = Math.random() * 2 + 2;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 45;
        this.spriteHeight = 45;
        this.sound = Math.random() <=0.5 ? 'attacka10202022_1' : 'attacka10202022_1';
    }
    update(){
        this.x -= this.speed;
        if (this.x < 0 - this.radius * 2){
            this.x < canvas.width + 200;
            this.y = Math.random()* (canvas.height - 150) + 90;
            this.speed = Math.random() * 2 + 2;
            }
        if (gameFrame % 5 == 0){
            this.frame++;
            if (this.frame >= 12) this.frame = 0;
            }           
// player/object collision
            const dx = this.x - player.x;
            const dy = this.y - player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.radius + player.radius){
            handleGameOver();
            }
        }
    draw(){
        ctx.fillStyle = 'gold'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius,  0, Math.PI * 2);
        ctx.fill();
        ctx.drawImage(enemyImage01, this.x-95, this.y-80, this.radius * 5, this.radius * 5);
    }
    }
const enemy1 = new Enemy01();
function handleEnemies(){
    enemy1.update();
    enemy1.draw();}
// enemy 02
const enemyImage02 = new Image();
enemyImage02.src = 'assets/shuttle-side.png';
class Enemy02 {
    constructor(){
        this.x = canvas.width + 200;
        this.y = Math.random() * (canvas.height - 150) + 90 * Math.random();
        this.radius = 30;
        this.speed = Math.random() * 2 + 2;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 45;
        this.spriteHeight = 45;
        this.sound = Math.random() <=0.5 ? 'attacka10202022_1' : 'attacka10202022_1';
    }
    update(){
        this.x -= this.speed;
        if (this.x < 0 - this.radius * 2){
            this.x < canvas.width + 200;
            this.y = Math.random()* (canvas.height - 150) + 90;
            this.speed = Math.random() * 2 + 2;
            }
        if (gameFrame % 5 == 0){
            this.frame++;
            if (this.frame >= 12) this.frame = 0;
            }           
// player/object collision
            const dx = this.x - player.x;
            const dy = this.y - player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.radius + player.radius){
            handleGameOver();
            }
        }
    draw(){
        ctx.fillStyle = 'gold'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius,  0, Math.PI * 2);
        ctx.fill();
        ctx.drawImage(enemyImage02, this.x-95, this.y-80, this.radius * 5, this.radius * 5);
    }
    }
const enemy2 = new Enemy02();
function handleEnemies(){
    enemy2.update();
    enemy2.draw(); 
}
// game over
function handleGameOver(){
    ctx.fillStyle = 'red';
    ctx.fillText('GAME OVER, YOUR NEW HIGHSCORE: ' + HighScore, 70, 250);
    ctx.fillText('REFRESH TO CONTINUE.', 185, 350);
    gameOver = true;
}
// // /Coin
const coinArray = []
const coinImage = new Image();
coinImage.src = "assets/sprite/spriteSub/coin.gif";
class coin {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.radius = 25;
        this.speed = Math.random() * 10 + 1;
        this.distance;
        this.counted = false;
        this.sound = Math.random() <=0.5 ? 'attacka10202022_1' : 'attacka10202022_1';
    }
    update(){
        this.y -= this.speed;
        const dx = this.x - player.x;
        const dy = this.y -  player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }
    draw(){
        ctx.fillStyle = 'blue'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
        ctx.drawImage(coinImage, this.x-35, this.y-35, this.radius * 2.7, this.radius * 2.7); 

    }
}
const attackA = document.createElement('audio');
attackA.src = './assets/attacka10202022_1.wav';
const attackB = document.createElement('audio');
attackB.src = './assets/attacka10202022_1.wav';
// const attackC = document.createElement('audio');
// attackC.src = './assets/attackc10202022.wav';
function handleCoins(){
    if(gameFrame % 50 == 0){
        coinArray.push(new coin());
    }
    for(let i = 0; i < coinArray.length; i++){
        coinArray[i].update();
        coinArray[i].draw();
        if (coinArray[i].y < 0 - coinArray[i].radius * 2){
            coinArray.splice(i, 1);
            i--;
        } else if (coinArray[i].distance <  coinArray[i].radius + player.radius){
            if (!coinArray[i].counted){
                if (coinArray[i].sound == 'sound1'){
                    attackA.play();
                } else {
                    attackB.play();
                } 
                HighScore++;
                coinArray[i].counted = true;
                coinArray.splice(i, 1);
                i--;
            }
            
        }
    }
}
// background
const background = new Image();
background.src = '/assets/sprite/spriteSub/spaceBackground03.png';
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height,

}
function backgroundAnimation(){
    BG.x1 -= gameSpeed;
    if (BG.x1 < -BG.width) BG.x1 = BG.width;
    BG.x2 -= gameSpeed;
    if (BG.x2 < -BG.width) BG.x2 = BG.width;
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}
// Animation Loop
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundAnimation();
    handleCoins();
    player.update();
    player.draw();
    handleEnemies();
    ctx.fillstyle = 'yellow';
    ctx.fillText('HIGHSCORE: ' + HighScore, 260, 50);
    gameFrame++;
    if (!gameOver) requestAnimationFrame(animate);     
}
animate();
window.addEventListener('resize', function(){
    canvasPosition = canvas.getBoundingClientRect();
});