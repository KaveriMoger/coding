function interviwQuestions(job) {
  if (job === "teacher") {
    return function(name) {
      console.log("whic subject do you teach" +' ' + name);
    }
  } else if (job === "developer") {
    return function(name) {
    console.log("in which domain you are working" + name);
    }
  }else {
    return function(name) {
      console.log("what do you do" + name);
    }
  }
}

var teacherInterview = interviwQuestions("teacher")
teacherInterview("john")
