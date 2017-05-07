$(document).ready(function() {
  $("#getQuote").on('click', function() {
    $.getJSON("https://api.myjson.com/bins/16jlgd", function(json) {
      var firstNum = Math.floor(Math.random() * json.length);
      var secondNum = Math.floor(Math.random() * json[firstNum].quotes.length);
      
      var author = json[firstNum].name;
      var quoteText = json[firstNum].quotes[secondNum];

      $('.js-preview').hide();
      $(".js-quoteDiv").fadeOut(function() {
        $('.js-quote').text("\"" + quoteText + "\"");
        $('.js-author').text(author);
      }).fadeIn();
      $('.js-tweetDiv').fadeIn();
      $('.js-tweet').attr('href', "https://twitter.com/intent/tweet?text=\"" + quoteText + "\" -" + author);
    });
  });
});