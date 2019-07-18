years = [1975,1986,1991,2005]

function calYears(arr,fn) {
  var res_arr = [];
  for(var i = 0; i < arr.length; i++) {
    res_arr.push(fn(arr[i]))
  }
  return res_arr;
}

function calcAge(years) {
  return (2019 - years);
}

function fullAge(el) {
  return el > 18
}
var ages = calYears(years, calcAge)
console.log(ages)

var full = calYears(ages, fullAge)
console.log(full)
