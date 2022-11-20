const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow", "lightblue", "rgba(13,142,100)", "goldenrod", "cyan", "Magenta"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    //Get random number between 0 - 10
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
   return Math.floor(Math.random()* colors.length);
}