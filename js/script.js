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

/*var age =26;
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
*/
//coding challenge 1;
/*
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
*/
//function.
/*
function calculateAge(yoB){
    var age =2021-yoB;
    return age;
}
var agejohn=calculateAge(1999);
var agemarry=calculateAge(1969);
var agemike=calculateAge(1967);
console.log(agejohn);

function yearsuntilretirement(name,year){
  var age =calculateAge(year);
  var retirement=65-age;
  if(retirement>=0){
  console.log(name+' retires in '+ retirement+' years.');
}else{

    console.log(name+ ' is already retired.');
}
}
yearsuntilretirement('john',1990);
yearsuntilretirement('mike',1969);
yearsuntilretirement('mary',1949);
*/
//array
/*
var name=['john','jane', 'mark'];
var years=new Array(1990,1969,1948);
console.log(name[2]);
name[1]='Ben';
console.log(name);

var john=['john', 'smith' ,1990 ,' teacher', false];

john.push('blue');  //to push element at last index
john.unshift('mr.')   //to push at first
john.pop();
john.shift();
console.log(john);

//alert(john.indexOf('smith'));

if(john.indexOf('teacher') === -1){
    console.log('john is not a teacher');
}
*/
//objects

var john={
    name: 'john',
    lastName: 'smith',
    YOB:'1990',
    job: 'teacher',
    ismarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz='job';
console.log(john[xyz]);

john.lastName='miller';
john['job']='programmer';

console.log(john);

//create data for jane in object form 

var jane=new Object();
jane.name='jane';
jane.lastName='smith';
jane["YOB"]=1969;
jane['job']='retired';
jane['ismarried']=true;

console.log(jane);

//object and methode 
/*
v1.0
var john={
    name:'john',
    lastName: 'smith',
    YOB: 1990,
    job: 'teacher',
    ismarried: false,
    family:['jane','mark','bob'],
    calculateAge: function(YOB){
        return 2021-this.YOB;
    }
};
console.log(john.family);
console.log(john.family[2]);
console.log(john.calculateAge(1999));
console.log(john.calculateAge());

*/
//v2.0
/*
var john={
    name:'john',
    lastName: 'smith',
    YOB: 1990,
    job: 'teacher',
    ismarried: false,
    family:['jane','mark','bob'],
    calculateAge: function(YOB){
   //     return 2021-this.YOB;
      this.age=2016-this.YOB;    
}
};
john.calculateAge();
console.log(john);
*/


//loops
for(var i=0;i<=9;i++){
    console.log(i);
}


var names=['john','jane','mary','mark','bob'];
for(var i=0;i<names.length;i++){
    console.log(names[i]);
}
for(var i=names.length-1;i>=0;i--){
    console.log(names[i]);
}
//break
for(var i=1;i<=5;i++){
    console.log(i);

    if(i===3){
        break;
    }
}

//continue
for(var i=1;i<=5;i++){
    

    if(i===3){
        continue;
    }
    console.log(i);
}

//problem 2
 var year=[2001,1985,1994,2014,1973];
/*var ages=[];

for(var i=0;i<year.length;i++){
    ages[i]=2016-year[i];
}
for(i=0;i<ages.length;i++){
    if(ages[i]>=18){
        console.log('person'+i+' is'+ages[i]+' years')
    }else{
        console.log('person'+' is'+ ages[i]+ ' year old, and is NOT of full age.');
    }
}*/

function printFullage(year)
{

//var year=[2001,1985,1994,2014,1973];
var ages=[];
var fullages=[];

for(var i=0;i<year.length;i++){
    ages[i]=2016-year[i];
}
for(i=0;i<ages.length;i++){
    if(ages[i]>=18){
        console.log('person'+i+' is'+ages[i]+' years')
         fullages.push(true);
    }else{
        console.log('person'+' is'+ ages[i]+ ' year old, and is NOT of full age.');
         fullagees.push(false);
    }
}
return fullages;
}

var year=[2001,1985,1994,2014,1973];
var full_1=printFullage(year);
var full_2=printFullage([2012,1915,1999]); 





































