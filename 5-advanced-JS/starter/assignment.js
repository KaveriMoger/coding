
(function() {
  function Question(question, answers, correct_ans) {
    this.question = question;
    this.answers = answers;
    this.correct_ans = correct_ans;
  }

  Question.prototype.displayQuestion =
  function() {
    console.log(this.question)

    for(var i = 0; i < this.answers.length; i++){
      console.log(i + ': ' + this.answers[i])
    }
  }

  Question.prototype.checkAnswer =
  function(ans) {
    if(ans === this.correct_ans) {
      console.log("correct answer!")
    } else {
      console.log("Wrong ! Please try again")
    }

  }
  var ques = new Question("is the javascript coolest language", ["yes","No"], 0)
  var ques1 = new Question("What is the name of this course's teacher", ["John","Michel", "Jonas"], 2)
  var ques2 = new Question("What does best describe coding", ["boring","hasrd", "fun", "tedious"], 2)

  var questions = [ques, ques1, ques2]
 function nextQestion() {
   var n = Math.floor(Math.random() * questions.length);
   questions[n].displayQuestion();

   var answer = prompt("please select the correct answer")
   if (answer != 'exit') {
     questions[n].checkAnswer(parseInt(answer));
     nextQestion();
   }
 }
 nextQestion();

})()
