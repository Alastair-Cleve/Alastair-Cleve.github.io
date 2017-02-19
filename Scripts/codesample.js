var CodeSample = function (Element) {
  this.element = Element;
  this.sample = ["using System;",
                 "using System.Collections.Generic;",
                 "using System.IO;",
                 "using System.Text;",

                 "0namespace BooleanLogicParser {",

                    "1public class Tokenizer {",
                      "2private readonly StringReader _reader;",
                      "2private string _text;",

                      "3public Tokenizer(string text) {",
                        "4_text = text;",
                        "4_reader = new StringReader(text);",
                      "2}",

                      "3public IEnumerable<Token> Tokenize() {",
                        "4var tokens = new List<Token>();",
                        "4while (_reader.Peek() != -1) {",
                          "5while (Char.IsWhiteSpace((char)_reader.Peek())) {",
                            "6_reader.Read();",
                          "5}"];
  this.sampleIndex = 0;
  this.sampleElementIndex = 0;
  this.reg = new RegExp(/^\d+$/);
};

CodeSample.prototype = {
  printLetter: function() {

    // Get the string segment in the this.sample array; if it's undefined, we've
    // reached the end of the array; begin again.
    var element = this.sample[this.sampleIndex];
    if (element === undefined) {
      this.sampleIndex = 0;
      this.sampleElementIndex = 0;
      this.element.empty();
      return;
    }

    // Get the next letter in the current string segment; if it's undefined,
    // go the next string segment, and reset the string segment element index
    var letter = element[this.sampleElementIndex];
    if (letter === undefined) {
      this.sampleIndex++;
      this.sampleElementIndex = 0;
      this.element.append(formatUtils.lineBreak);

    // Otherwise, test for any formatting code, and append the code, or
    // append the element
    } else {
      if (this.reg.test(letter) && this.sampleElementIndex === 0) {
        this.element.append(formatUtils.formats[parseInt(letter)]);
        this.sampleElementIndex++;
      } else {
        this.sampleElementIndex++;
        this.element.append(letter);
      }
    }

  }
};
