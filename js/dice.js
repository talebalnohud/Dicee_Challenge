
var r = Math.floor(Math.random() * 6) + 1;
var d = "./images/dice" + r + ".png"

document.querySelectorAll("img")[0].setAttribute("src",d)

var t = Math.floor(Math.random() * 6) + 1;
var n = "./images/dice" + t + ".png"

document.querySelectorAll("img")[1].setAttribute("src",n)

if (r > t){
    document.querySelector("h1").innerHTML=" 🏋️‍♀️player 1 win";
}
else if (r < t) {
    document.querySelector("h1").innerHTML="player 2 win🏋️‍♀️";
}
else {
    document.querySelector("h1").innerHTML="draw";

}