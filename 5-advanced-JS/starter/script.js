var test = "good morning"
function display() {
  var a = "hi"
  second();

  function second() {
    b = "Hello"
    console.log( a + " " + b + " " + test)
  }
}

display();
