var randomVariable1 = 1+Math.floor(6 * Math.random()) ;
console.log(Math.floor(randomVariable1));

var randomVariable2 = 1+ Math.floor(6 * Math.random());
console.log(Math.floor(randomVariable2));

var randomDice1 = "images/"+"dice"+randomVariable1+".png";  // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice1);

var randomDice2 = "images/dice"+randomVariable2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(randomVariable1>randomVariable2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Win";
} else
 if(randomVariable2>randomVariable1)
 {
  document.querySelector("h1").innerHTML = "Player 2 Win 🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
