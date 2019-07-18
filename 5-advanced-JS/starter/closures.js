function retirement(retirementAge) {
  var a = ' years left until retirement'
  return function(year) {
    var age = 2019 - year
    console.log((retirementAge - age) + a)
  }
}

var retirementUs = retirement(66)
retirementUs(1990)

retirement(65)(1993)


function interviwQuestions(job) {

  return function(name) {
    if (job === "teacher"){
      console.log("whic subject do you teach" +' ' + name);
    } else if(job === "lawyer") {
      console.log("which case you are handling" + ' ' + name)
    } else {
      console.log("what do you do" + ' ' + name)
    }
  }
  // if (job === "teacher") {
  //   return function(name) {
  //     console.log("whic subject do you teach" +' ' + name);
  //   }
  // } else if (job === "developer") {
  //   return function(name) {
  //   console.log("in which domain you are working" + name);
  //   }
  // }else {
  //   return function(name) {
  //     console.log("what do you do" + name);
  //   }
  // }
}

var teacherInterview = interviwQuestions("teacher")
teacherInterview("john")

interviwQuestions("lawyer")("kaveri")
