// Left Dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImageName = "dice" + randomNumber1 + ".png";
var randonImageLocation = "images/" + randomImageName;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randonImageLocation);

// Right Dice
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageName2 = "dice" + randomNumber2 + ".png";
var randonImageLocation2 = "images/" + randomImageName2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randonImageLocation2);
