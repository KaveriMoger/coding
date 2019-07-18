//let and const

//ES5

/*
var name5 = "John Smith"
var age5 = 23;

name5 = "John Miller"

console.log(name5)


//ES6

const name6 = "Kaveri"
let age = 25;

name6 = "Kaveri Moger";

console.log(name6);
*/

//var is function scope
//let an dconst are block scoped

//ES5
/*
function driverLicense5(passed) {
  if (passed) {
    var firstName = 'John';
    var yearOfBirth = 1990
 }
 console.log(firstName + ' born in ' + yearOfBirth + ' he is now officially allowed to drive a car')

}

driverLicense5(true)


//ES6

function driverLicense6(passed) {
  let firstName;
  const yearOfBirth = 1993
  if (passed) {
    firstName = 'John';
 }
 console.log(firstName + ' born in ' + yearOfBirth + ' he is now officially allowed to drive a car')

}

driverLicense6(true)


var i = 45;

for(var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);



//Es6 IIFE
{
  const a = 1;
  let b = 2;
}

//console.log(a + b)


(function () {
  var c = 8
})()

console.log(c);



let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1992;

function calcAge(year) {
  return (2019 - yearOfBirth)
}

console.log('This is ' + firstName + ' ' + lastName + '.he was born in ' + yearOfBirth +
'now he is '+ calcAge(yearOfBirth) + 'years old' )

console.log(`This is ${firstName} ${lastName}. He was born on ${yearOfBirth} and now he is ${calcAge(yearOfBirth)} years old.`)



const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('k'));
console.log(`${firstName} `.repeat(5));



const years = [1976,1988,1993,2005]

//ES5
var ages5 = years.map(function(el){
  return (2019 - el);
})

//ES6
let ages6 = years.map(el => 2019 - el)

//ES6 with 2 arguments

let ages61 = years.map((el, index) => `age element ${index+1}: ${2019 - el}.`)



//ES6 with multiple lines
let ages62 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `age element ${index+1}: ${age}.`
})

console.log(ages5);
console.log(ages6);
console.log(ages61);
console.log(ages62);

*/
/*
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    var self = this

    document.querySelector('.green').addEventListener('click', function() {
      var str = 'this is the box number ' + self.position + ' and the color is ' + self.color
      alert(str);
    })
  }
}

box5.clickMe();


const box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {

    document.querySelector('.green').addEventListener('click', ()  => {
      let str = `this is the box number ${this.position} and the color is  ${this.color}`
      alert(str);
    })
  }
}

box6.clickMe();


const box6 = {
  color: 'green',
  position: 1,
  clickMe: () => {

    document.querySelector('.green').addEventListener('click', ()  => {
      let str = `this is the box number ${this.position} and the color is  ${this.color}`
      alert(str);
    })
  }
}

box6.clickMe();
*/
//ES5
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + " friends with "+ el
  }.bind(this))
  console.log(arr);
}


var friends5 = ['Bob', 'Mark', 'Jane', 'Julie']
new Person('John').myFriends5(friends5);



//ES6
Person.prototype.myFriends5 = function(friends)  {
  const arr = friends.map(el =>
    this.name + " friends with "+ el)
  console.log(arr);
}


let friends6 = ['Bob', 'Mark', 'Jane', 'Julie']
new Person('Mike').myFriends5(friends6);
