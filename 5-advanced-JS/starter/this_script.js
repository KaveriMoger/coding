calcAge(1993)
function calcAge(year) {
  console.log(2019-year)
  console.log(this);
}

var jon = {name: "John",
           birthYear: 1995,
          job: "tecaher",
          calcAge: function() {
            console.log(this);
            console.log(2019 - this.birthYear)
             function test() {
               console.log(this);
             }
             test();
          } }

jon.calcAge();

var mike = {name: "Mike",
            birthYear: 1987,
            job: "Programmer"}
mike.calcAge = jon.calcAge;
mike.calcAge();
