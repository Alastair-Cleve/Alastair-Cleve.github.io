$(function() {
  var code = new CodeSample($("#code-animation"));

  setInterval(function() {
    code.printLetter();
  }, 150);
});
