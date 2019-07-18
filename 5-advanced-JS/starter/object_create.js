var personProfile = {
  calcAge: function () {
    console.log(2019 - this.birthYear);
  }
}


var john = Object.create(personProfile)
john.name = "John";
john.job = "tester";
john.birthYear = 1990;

john.calcAge();
