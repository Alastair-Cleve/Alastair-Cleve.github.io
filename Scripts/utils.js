var utils = {
  getTabs: function(numOfTabs) {
    var tabs = "";
    for (var i = 0; i < numOfTabs; i++) {
      tabs += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    return tabs;
  },

  navigate: function(url) {
    window.location = url;
  }
};
