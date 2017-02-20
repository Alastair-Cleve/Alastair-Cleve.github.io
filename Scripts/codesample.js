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

    // Get the string segment in the this.sample array
    var element = this.sample[this.sampleIndex];

    // If it's undefined, we've, reached the end of the array; begin again.
    if (element === undefined) {
      this.sampleIndex = 0;
      this.sampleElementIndex = 0;
      this.element.empty();
      this.element.append(formatUtils.shellCursor);
      return;
    }

    // Get the next letter in the current string segment
    var letter = element[this.sampleElementIndex];

    // If it's undefined, go the next string segment, and reset the string segment element index
    if (letter === undefined) {
      this.sampleIndex++;
      this.sampleElementIndex = 0;
      $("#shell-cursor").remove();
      this.element.append(formatUtils.lineBreak);

    // Otherwise, test for any formatting code
    } else {
      // If there's a formatting code, append the code
      if (this.reg.test(letter) && this.sampleElementIndex === 0) {
        this.sampleElementIndex++;
        this.element.append(formatUtils.formats[parseInt(letter)]);
        this.element.append(formatUtils.shellCursor);

      // Otherwise, append the element
      } else {
        this.sampleElementIndex++;
        if ($("#shell-cursor").length > 0) {
          $("<span>" + letter + "</span>").insertBefore($("#shell-cursor"));
        } else {
          this.element.append(formatUtils.shellCursor);
          $("<span>" + letter + "</span>").insertBefore($("#shell-cursor"));
        }
      }
    }

  }
};
