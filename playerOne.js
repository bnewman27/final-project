// function newPlayerOne(x, y) {
//     const element = newImage('/assets/sprite/spriteSub/playerOneidle.gif')
//     element.style.zIndex = 1;

//     function handleAction(direction) {
//         if (direction === null) {
//             element.src = 'assets/sprite/spriteSub/playerOneidle.gif'
//         }
//         if (direction === 'north') {
//             element.src = 'assets/sprite/spriteSub/playerOnerun.gif'
//         }
//         if (direction === 'west') {
//             element.src = 'assets/sprite/spriteSub/playerOnerunRev.gif'
//         }
//         if (direction === 'east') {
//             element.src = 'assets/sprite/spriteSub/playerOnerun.gif'
//         }
//         if (direction === 'south') {
//             element.src = 'assets/sprite/spriteSub/playerOnerun.gif'
//         }
//         if (direction === 'jump') {
//             element.src = 'assets/sprite/spriteSub/playerOnejump.gif'
//         }
//         if (direction === 'crouchWest') {
//             element.src = 'assets/sprite/spriteSub/playerOneCrouchWalkRev.gif'
//         }
//         if (direction === 'crouchEast') {
//             element.src = 'assets/sprite/spriteSub/playerOneCrouchWalk.gif'
//         }
//         if (direction === 'attack1') {
//             element.src = 'assets/sprite/spriteSub/playerOneAttack.gif';
//             sound('assets/attack110202022.wav')
//         }
//         if (direction === 'attack2') {
//             element.src = 'assets/sprite/spriteSub/playerOneAttack2.gif';
//             sound('assets/attack210202022.wav')
//         }
//         if (direction === 'attack3') {
//             element.src = 'assets/sprite/spriteSub/playerOneAttack3.gif';
//             sound('assets/attack310202022.wav')
//         } 
//         if (direction === 'combo') {
//             element.src = 'assets/sprite/spriteSub/playerOneCombo.gif';
//             sound('assets/combo10202022.wav')
//         }
//     }

//     move(element).withArrowKeys(x, y, handleAction)

//     return {
//         element: element
//     }
// }
// const pc = newPlayerOne(100, 110)
