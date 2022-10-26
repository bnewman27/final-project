

// // // /Coin?
// const coinArray = []
// const coinImage = new Image();
// coinImage.src = "assets/sprite/spriteSub/coin.gif";

// class coin {
//     constructor(){
//         this.x = Math.random() * canvas.width;
//         this.y = canvas.height + 100;
//         this.radius = 25;
//         this.speed = Math.random() * 10 + 1;
//         this.distance;
//         this.counted = false;
//         this.sound = Math.random() <=0.5 ? 'attacka10202022_1' : 'attacka10202022_1';
//     }
//     update(){
//         this.y -= this.speed;
//         const dx = this.x - player.x;
//         const dy = this.y -  player.y;
//         this.distance = Math.sqrt(dx*dx + dy*dy);
//     }
//     draw(){
//         ctx.fillStyle = 'blue'
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.closePath();
//         ctx.stroke();
//         ctx.drawImage(coinImage, this.x-35, this.y-35, this.radius * 2.7, this.radius * 2.7); 

//     }
// }

// const attackA = document.createElement('audio');
// attackA.src = './assets/attacka10202022_1.wav';
// const attackB = document.createElement('audio');
// attackB.src = './assets/attacka10202022_1.wav';
// // const attackC = document.createElement('audio');
// // attackC.src = './assets/attackc10202022.wav';

// function handleCoins(){
//     if(gameFrame % 50 == 0){
//         coinArray.push(new coin());
        
//     }
//     for(let i = 0; i < coinArray.length; i++){
//         coinArray[i].update();
//         coinArray[i].draw();
//         if (coinArray[i].y < 0 - coinArray[i].radius * 2){
//             coinArray.splice(i, 1);
//             i--;
//         } else if (coinArray[i].distance <  coinArray[i].radius + player.radius){
//             if (!coinArray[i].counted){
//                 if (coinArray[i].sound == 'sound1'){
//                     attackA.play();
//                 } else {
//                     attackB.play();
//                 } 
//                 HighScore++;
//                 coinArray[i].counted = true;
//                 coinArray.splice(i, 1);
//                 i--;
//             }
            
//         }
//     }
// }