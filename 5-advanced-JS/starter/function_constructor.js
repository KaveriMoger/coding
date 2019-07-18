var Person = function(name, job, birthYear) {
  this.name = name;
  this.job = job;
  this.birthYear = birthYear;
}
Person.prototype.calcAge = function() {
  console.log(2019 - this.birthYear)
}

var john = new Person("john", "lecturer", 1993)

var jane = new Person("Jane", "farmer", 1986)
var mark = new Person("Mark", "DESIGNER", 1989)
john.calcAge();
jane.calcAge();
mark.calcAge();
