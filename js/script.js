/*console.log('hello world!');
var name=ashwani;
console.log(name);
var lastName=kumar;
console.log(lastName);
var age=25;
console.log(age);
var fullAge=true;
console.log(fullAge); 
console.log(name+age);
console.log(age+age);
var job,isMarried;
job=income tax inspector;
ismarried=true;
console.log(name+' '+age+' '+job+' '+ismarried);
age='twenty three';
job='coder';
console.log(name+' '+age+' '+job+' '+ismarried);
var lastName=prompt('what is the last name?');
console.log(lastName);
alert(name+' is a'+age+'years old '+job+'.is he married '+ismarried+'.');
*/


//operators;
/*var now=2021;
var birthYear=now-22;
birthYear=now-26*2;
console.log(birthYear);

var agejohn=30;
var agemark=30;
agejohn=agemark=(3+5)*4-6;
agejohn++;
agemark--;
console.log(agejohn);
console.log(agemark);
*/
/*
var name='ram';
var age=26;
var ismarried='yes';

if(ismarried==='yes'){
    console.log(name+' is married!');
}else{
    console.log(name+'will hopefully marry soon:');
}

ismarried=false;
if(ismarried){
    console.log('yes!');
}else{
    console.log('no!');
}
*/
/*if(23=="23")
{
    console.log('something to print...');
}
//but 23==="23" not possbble(this is false condition)
*/

//lecture=boolean logic and switch

var age =26;
if(age<20){
    console.log('john is teenager');
}
else if(age>20&&age<30)
{
    console.log('john is young man')
}else{
    console.log('jaohn is man');
}

var job='teacher';

job =prompt('what does john do');
switch(job){
    case 'teacher':
        console.log('john teaches kid.');
        break;
        case 'driver':
            console.log('john drives a cab in lisbon');
            break;
            case 'cop':
                console.log('john help fight crime');
                break;
                default:
                    console.log('john does something else');
}

//coding challenge 1;
var heightjohn=176;
var heightmike=166;
var agejohn=26;
var agemike=28;

var scorejohn=heightjohn+5*agejohn;
var scoremike=heightmike+5*agemike;

if(scorejohn>scoremike){
    console.log('john win the game with' + scorejohn +'points');
}else if(scoremike>scorejohn){
    console.log('mike wins the game with' + scoremike + 'points');
}else{
    console.log('there is a draw.');
}

var heightmarry=156;
var agemarry=31;
var scoremarry=heightmarry+agemarry*5;
 
if(scorejohn>scoremike&&scoremarry){
    console.log('john wins the game');
}else if(scoremike>scorejohn&&scoremarry){
    console.log('mike wins the game');
}else if(scoremarry>scorejohn&&scoremike){
   console.log('marry wins the game ');
}else{
    console.log('it\'s a draw' );
}

//function.

function calculateAge(yoB){
    var age 2021-yoB;
    return age;
}
var agejohn=calculateAge(1999);
console.log(agejohn);

































