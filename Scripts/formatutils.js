var formatUtils = {
  lineBreak: "<br />",
  lineIndent: "&nbsp;&nbsp;&nbsp;&nbsp;",
  formats: {
    0: "<br />",
    1: ("<br />" + "&nbsp;&nbsp;&nbsp;&nbsp;"),
    2: ("&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;"),
    3: ("<br />" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;"),
    4: ("&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;"),
    5: ("&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;"),
    6: ("&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;&nbsp;&nbsp;"),
  },
  shellCursor: "<span id='shell-cursor'></span>"
};
