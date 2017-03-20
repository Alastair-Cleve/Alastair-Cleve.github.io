var utils = {
  getTabs: function(numOfTabs) {
    var tabs = "";
    for (var i = 0; i < numOfTabs; i++) {
      tabs += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    return tabs;
  },

  isImageCached: function(imgUrl){
    var imgTag = $("img");
    imgTag.src = imgUrl;
    return imgTag.complete || (imgTag.width + imgTag.height) > 0;
  },

  navigate: function(url) {
    window.location = url;
  },

  openArticle: function(file) {
    $("#current-article-content").attr("src", "Articles/" + file);
  },

  scrollToBottom: function () {
    $("body, html").animate({
      scrollTop: $(document).height()
    }, 400);
  },

  sendEmail: function () {
    var address = 'me@alastaircleve.com';
    var subject = 'Saying Hi';
    var emailBody = 'Hello Alastair,';
    document.location = "mailto:" + address + "?subject=" + subject + "&body="
      + emailBody;
  }

};
