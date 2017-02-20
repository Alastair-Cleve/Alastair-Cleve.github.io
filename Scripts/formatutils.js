var formatUtils = {
  lineBreak: "<br />",
  formats: {
    0: "<br />",
    1: ("<br />" + utils.getTabs(1)),
    2: utils.getTabs(2),
    3: ("<br />" + utils.getTabs(2)),
    4: utils.getTabs(3),
    5: utils.getTabs(4),
    6: utils.getTabs(5),
  },
  shellCursor: "<span id='shell-cursor'></span>"
};
