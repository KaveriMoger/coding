
//ES5
const years = [1978, 1967, 1993, 2005]
var ages5 = years.map(function(el) {
  return (2019 - el)
})

console.log(ages5);


//ES6

let ages6 = years.map( el => 2019 - el)

console.log(ages6);
