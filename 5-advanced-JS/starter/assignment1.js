var Question = function(question,answer,correct) {
  this.question = question;
  this.answer = answer;
  this.correct = correct;
}

Question.prototype.displayQuestion =
function() {
  console.log(this.question);
  for(var i = 0; i < this.answer.length; i++) {
    console.log(i +': ' + this.answer[i])
  }

}

Question.prototype.checkAnswer =
function(ans) {
  if (ans === this.correct) {
    console.log("Correct Answer.")
  } else {
    console.log('wrong answer!')
  }
}


var q1 = new Question("Is javascript user friendly ?", ['Yes', 'No'], 0);
var q2 = new Question("Who is you favourite actor ?", ['Sudeep', 'Yash', 'Ganesh', 'Darshan'], 1)
var q3 = new Question("Who is the PM of india ?", ["Manmohan singh", "yadiyurappa", "Narendra Modhi"])

var questions = [q1, q2, q3]

var random = Math.floor(Math.random() * questions.length);
questions[random].displayQuestion();

var answer = parseInt(prompt("Enter the correct answer"))

questions[random].checkAnswer(answer);
