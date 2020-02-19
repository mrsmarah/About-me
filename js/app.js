'use strict';

var score = 0 ;

var username = prompt('Hello, it\'s Marah! What\'s your name ?');
alert('Welcome to my page '+ username +' ! ');
//console.log('Welcome to my page '+ username +' ! ');

var favColor = prompt('Let\'s see how much you know about me! Does pink is my favorite color ?');
if (favColor.toLocaleLowerCase() === "yes" || favColor.toLocaleLowerCase() === "y") {
    alert("Nope "+ username + ", White is my favorite.");   
}
else if (favColor.toLocaleLowerCase() === "no" || favColor.toLocaleLowerCase() === "n"){
    alert("you're right "+ username +", White is my favorite.");
    score = score + 1 ;
}
else {
    alert("sorry, you have to answer with yes or no.");
}
//console.log(favColor);

var coding = prompt('Do you think I had a background in coding before this course ?');
if (coding.toLocaleLowerCase() === "yes" || coding.toLocaleLowerCase() === "y") {
    alert('Wrong, I had zero backgroung about coding.');
}
else if (coding.toLocaleLowerCase() ==="no" || coding.toLocaleLowerCase() === "n"){
    alert('Right answer '+ username + ' I had zero backgroung about coding.');
    score = score + 1 ;
}
else {
    alert('sorry, you have to answer with yes/no or y/n.');
}
//console.log(coding);

var pets = prompt('Do you think I love pets ?');
if (pets.toLocaleLowerCase() === "yes" || pets.toLocaleLowerCase() === "y"){
    alert('absolutely! I love cats.');
    score = score + 1 ;
}
else if (pets.toLocaleLowerCase() === "no" || pets.toLocaleLowerCase() === "n"){
    alert('wrong answer '+ username + ', I do love pets.');
}
else {
    alert('sorry, you have to answer with yes/no or y/n.');
}
//console.log(pets);

var season = prompt('Does summer is my favorite season ?');
if (season.toLocaleLowerCase() === "yes" || season.toLocaleLowerCase() === "y") {
    alert('Right answer '+ username + ' !');
    score = score + 1 ;
}
else if (season.toLocaleLowerCase() ==="no" || season.toLocaleLowerCase() === "n"){
    alert('wrong answer '+ username + ', it is !');
}
else {
    alert('sorry, you have to answer with yes/no or y/n.');
}
//console.log(season);

var talent = prompt('Do you think I have a singing talent ?');
if (talent.toLocaleLowerCase() === "yes" || talent.toLocaleLowerCase() === "y"){
    alert('Wrong answer ' + username + ', I have a horrible voice!' );
}
else if (talent.toLocaleLowerCase() ==="no" || talent.toLocaleLowerCase() === "n"){
    alert('Absolutely Right!');
    score = score + 1 ;
}
else {
    alert('sorry, you have to answer with yes/no or y/n.');
}
// console.log(talent);

for( var i = 0 ; i < 4 ; i++ ){
    var age = prompt('How old Do I look like ?');
    age = parseInt(age);
    console.log( typeof age);
    
    if (age === 23 ){
        alert('You\'re Right!');
        score = score + 1 ;
        { break; }
    }
    if (i == 3){
        alert('No more attempts! I\'m 23 .');
    }  
    else if (age > 23){
            alert('Too old, try again! *' + (3-i) + ' attempts left!');   
        }
    
    else if (age < 23){
            alert('Too young, try again! *'+ (3-i) + ' attempts left!');
        }
    else {
            alert('Please enter a number!');
        }
          
}
// console.log(age);

var city = ['salt','amman','irbid','madaba']
var favCity = prompt('What is my Favorite city in jordan ?');
if ( favCity.toLocaleLowerCase() === city[0] || favCity.toLocaleLowerCase() === city[1]|| favCity.toLocaleLowerCase() === city[2]|| favCity.toLocaleLowerCase() === city[3])
{
    alert('true');
    score = score + 1 ;

}
else {
    for ( var j = 0 ; j < 6 ; j++ ){
        alert('Wrong answer; try out another one! *' + (5-j) + ' attempts left!' );
        favCity = prompt('What is my Favorite city in jordan ?');
    }
}

  console.log(favCity);  
alert('Your final score out of 7 is : ' + score);
