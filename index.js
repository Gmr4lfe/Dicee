var randomNumber1 = Math.floor(Math.random()*6)+1; //random number that starts at 1 instead of 0 which is why it has +1 at the end

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "images/dice"+ randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0]; //chooses the first img element in html
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomDiceImage);
image2.setAttribute("src",randomDiceImage2);
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!!!!";
}else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!!!!";
}else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "It's a Draw";
}
