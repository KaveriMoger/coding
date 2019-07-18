var john = {
  name:"John",
  birthYear: 1990,
  job: "teacher",
  presentation: function(style,timeOfDay) {
    if (style === "formal") {
      console.log("good " + timeOfDay + ", Ladies and genteleman  I am" + this.name + "I am " + this.birthYear + " years old and my job is" + this.job)
    }else if (style === "friendly"){
      console.log("hey wats up? I am" + this.name + "I am " + this.birthYear + "my job is" + this.job)
    }
  }
}

var emily = {
  name: "Emily",
  birthYear: 1993,
  job:"cricketer"
}


john.presentation("formal", "morning")

john.presentation.call(emily, "freindly", "evening")

//bind
var johnFriendly = john.presentation.bind(john,"friendly")
johnFriendly("night")

var emilyFriendly = john.presentation.bind(emily, "formal")
emilyFriendly("afternoon")



years = [1975,1986,1991,1998, 2005]

function calYears(arr,fn) {
  var res_arr = [];
  for(var i = 0; i < arr.length; i++) {
    res_arr.push(fn(arr[i]))
  }
  return res_arr;
}

function calcAge(years) {
  return (2016 - years);
}

function fullAge(limit, el) {
  return el >= limit
}

var ages = calYears(years, calcAge)

 var fullAges = calYears(ages, fullAge.bind(this, 20))

 console.log(ages);
 console.log(fullAges)
