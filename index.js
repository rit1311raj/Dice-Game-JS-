var randomNumber1 = Math.floor(Math.random()*6)+1;//gives us random number b/w 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice image

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
//img2
var randomNumber2 = Math.floor(Math.random()*6)+1;//gives us random number b/w 1 to 6

//var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice image

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML= "Player 1 wins!🥳";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML= "Player 2 wins!🥳";
}
else{
  document.querySelector("h1").innerHTML= "Draw!";
}
