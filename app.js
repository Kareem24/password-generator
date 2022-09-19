const password = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g']

const genrator = document.querySelector('.genrate')
const pin = document.querySelector('.passwrod')

function randomInt(min,max){
    const randomRange = (max - min) + 1;
    const  randomNumber = Math.random() *randomRange
   const floorNumber = Math.floor(randomNumber) +min
   return floorNumber
}
// console.log(foods[randomInt(0,5)]);

function randomPassword(){
    
    let item ='';
    for(let i = 0;i<8 ;i++){
        item += password[randomInt(0,16)]
        // console.log(item);
    }
    
    pin.textContent =item
}
genrator.addEventListener('click',randomPassword)