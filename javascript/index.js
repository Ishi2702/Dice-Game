var randomNumber = Math.floor(Math.random()*6) + 1;
var newImage = "dice" + randomNumber + ".png";
var newImageSource = "images/" + newImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", newImageSource);

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var newImage1 = "dice" + randomNumber1 + ".png";
var newImageSource1 = "images/" + newImage1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", newImageSource1);

if(randomNumber > randomNumber1) {
  document.querySelector("h1").innerHTML = "🥳🎉 Player1 Wins";
} else if(randomNumber < randomNumber1) {
  document.querySelector("h1").innerHTML = "🥳🎉 Player2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!🙃";
}
