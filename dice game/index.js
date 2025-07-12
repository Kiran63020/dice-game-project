var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdice="dice"+randomNumber1+".png";
var randomdicelo="images/"+randomdice;
document.querySelectorAll("img")[0].setAttribute("src",randomdicelo);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdice2="dice"+randomNumber2+".png";
var randomdicelo2="images/"+randomdice2;
document.querySelectorAll("img")[1].setAttribute("src",randomdicelo2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩player1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩player2 wins";
}
else {
    document.querySelector("h1").innerHTML="🎌Draw";
}