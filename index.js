var imageFolder = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];
let imageElement = document.querySelector(".img1");
let randomPictures = Math.floor(Math.random() * imageFolder.length);
let result = imageFolder[randomPictures];
if (imageElement) {
    imageElement.src = result;
}
//second image
var image2Folder = [
   "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];
let image2Element = document.querySelector(".img2");
let random2Pictures = Math.floor(Math.random() * image2Folder.length);
let result2 = image2Folder[random2Pictures];
if (imageElement) {
    image2Element.src = result2;
}
//winner function 
let H1Element = document.querySelector("h1");
    let resultOne = randomPictures;
    let resultTwo = random2Pictures;
    if (resultOne > resultTwo){
        H1Element.textContent = "🚩 player 1 wins ";
    } else if (resultOne === resultTwo){
        H1Element.textContent = "It's a draw!";
    }
    else {
        H1Element.textContent = "player 2 wins 🚩";
    }

    var randomNumbers = Math.floor(Math.random()*6 + 1 )
    var conResult = "./images/dice" + randomNumbers + ".png"
    var newImages = document.querySelectorAll("img")[0]
    var newResult = newImages.setAttribute("src", conResult)