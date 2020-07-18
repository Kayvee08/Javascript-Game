
// Testing whether the Javascript file is connected or not
console.log("Hello");

// The solution
var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;
console.log(randomNumber1);
console.log("dice"+randomNumber1+".png");
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "It's a Draw";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}