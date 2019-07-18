var a = ["John", 29]
// var name = a[0]
// var age = a[1]

// console.log(name)
// console.log(age)

const [name, age] = ["kaveri", 25]
console.log(name)
console.log(age)



const obj = {firstName: 'John', lastName: 'Smith'}
const {firstName, lastName} = obj;
console.log(firstName, lastName)

const {firstName: c, lastName: d} = obj;
console.log(c)
console.log(d)


function calcAgeRetirement(years) {
  const age = new Date().getFullYear() - years;
  return [age, 65 - age]
}

const [age2, retirement] = calcAgeRetirement(1990)
console.log(age2, retirement);
