"use strict";
var username = prompt("Hello, it's Marah! What's your name ?");
alert("Welcome to my page "+ username +" ! ");
console.log("Welcome to my page "+ username +" ! ");

var favColor = prompt("Does pink is my favorite color ?");
if (favColor.toLocaleLowerCase() === "yes" || favColor.toLocaleLowerCase() === "y") {
    alert("Nope "+ username + ", White is my favorite.");
}
else if (favColor.toLocaleLowerCase() === "no" || favColor.toLocaleLowerCase() === "n"){
    alert("you're right "+ username +", White is my favorite.");
}
else {
    alert("sorry, you have to answer with yes or no.");
}

var coding = prompt("Do you think that I have a background in coding ?");
if (coding.toLocaleLowerCase() === "yes" || coding.toLocaleLowerCase() === "y") {
    alert("Wrong, I have zero backgroung about coding.");
}
else if (coding.toLocaleLowerCase() ==="no" || coding.toLocaleLowerCase() === "n"){
    alert("Right answer "+ username + " I have zero backgroung about coding.");
}
else {
    alert("sorry, you have to answer with yes/no or y/n.");
}

var pets = prompt("Do you think I love pets ?");
if (pets.toLocaleLowerCase() === "yes" || pets.toLocaleLowerCase() === "y"){
    alert("absolutely! I love cats.");
}
else if (pets.toLocaleLowerCase() === "no" || pets.toLocaleLowerCase() === "n"){
    alert("wrong answer "+ username + ", I do love pets.");
}
else {
    alert("sorry, you have to answer with yes/no or y/n.");
}

var season = prompt("Does summer is my favorite season ?");
if (season.toLocaleLowerCase() === "yes" || season.toLocaleLowerCase() === "y") {
    alert("Right answer "+ username + " !");
}
else if (season.toLocaleLowerCase() ==="no" || season.toLocaleLowerCase() === "n"){
    alert("wrong answer "+ username + ", it is !");
}
else {
    alert("sorry, you have to answer with yes/no or y/n.");
}

var talent = prompt("Do you think I have a singing talent ?");
if (talent.toLocaleLowerCase() === "yes" || talent.toLocaleLowerCase() === "y"){
    alert("Wrong answer " + username + ", I have a horrible voice!" );
}
else if (talent.toLocaleLowerCase() ==="no" || talent.toLocaleLowerCase() === "n"){
    alert("Absolutely Right!");
}
else {
    alert("sorry, you have to answer with yes/no or y/n.");
}





