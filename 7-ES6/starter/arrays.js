const boxes = document.querySelectorAll('.box');


//ES5

var boxArray5 = Array.prototype.slice.call(boxes)

// boxArray5.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// })


//ES6

const boxArray6 = Array.from(boxes)
boxArray6.forEach(cur => cur.style.backgroundColor = 'dodgerblue')


//ES5
// for(var i = 0; i < boxArray5.length; i++) {
//   if (boxArray5[i].className === 'box blue') {
//     break;
//   }
//   boxArray5[i].textContent = 'I changed to blue!';
// }


//ES6
for(const cur of boxArray6) {
  if(cur.className === 'box blue') {
    continue;
  }
  cur.textContent = 'i changed to blue';
}



var ages = [14,16,12,17,22]

// ES5
var age = ages.map(function(cur) {
  return cur >= 18
})

console.log(age);
console.log(age.indexOf(true));
console.log(ages[age.indexOf(true)]);

//ES6

const set = ages.findIndex(cur => cur >= 18)
console.log(set);

console.log(ages.find(cur => cur >= 18))



var ages5 = [18, 30, 12, 21]

function addFourAges(a, b, c, d) {
  return a + b + c + d
}

var fourAges = addFourAges(18, 30, 12, 21)

console.log(fourAges);
var sum2 = addFourAges.apply(null, ages5)
console.log(sum2);

var sum3 = addFourAges(...ages5)
console.log(sum3);


const smithFamily = ['John', 'Jane', 'Mark'];
const markFamily = ['Julie', 'Emily', 'Smith']

const bigFamily = [...smithFamily, 'Lily', ...markFamily]

console.log(bigFamily);


const h = document.querySelector('h1')
const boxes77 = document.querySelectorAll('.box')

const all = [h, ...boxes77]

Array.from(all).forEach(cur => cur.style.color = 'purple')
