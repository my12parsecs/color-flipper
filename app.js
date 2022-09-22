const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    //math.random で0-1の間でランダム
    //それにcolorsのlengthである4をかけて0-4の間でランダム
    //math.floorで小数点以下切り捨て
    return Math.floor(Math.random() * colors.length);
}