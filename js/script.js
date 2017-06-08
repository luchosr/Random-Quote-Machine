// modularized script
(function(){
  // declaring a Quotes array
  var quotes = [
      "¡D'oh!!.",
      "Talent is the man in freedom, born in anyone who feels able to fly with their ideas.",
      "Beneath this mask there is more than flesh. Beneath this mask there is an idea, Mr Creedy. And ideas are bullet-proof!.",
      "Dream on big and dare to fail.",
      "Quality is not an act, is a habit.",
      "Anyone who did something important was disciplined.",
      "Creativity is intelligence having fun.",
      "What you achieve by achieving your goals is not as important as what you become achieving your goals.", "Sometimes you win, sometimes you learn."
  ];
//Declaring authors array.
  var authors = ["- Homer J. SImpson", "- Luis A. Spinetta", "- V (V for vendetta)", " - Norman Vaughan", " - Aristotle", "- Andrew Hendrixson",
      "- Albert Einstein", "- Henry David Thoreau", "- John Maxwell"
  ];

  var newQuote = function() {// Getting a random number to floor round it, and Quote the coincident array element on Quotes array and Authors array.
      var randomNumber = Math.floor(Math.random() * (quotes.length));
      $(".quotes").html(quotes[randomNumber]);//Replacing the Quotes
      $(".author").html(authors[randomNumber]);//replacing the Authors
      //Adding a twitter post with the selected Quote in it.
      $(".tw").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quotes[randomNumber] + '" ' + authors[randomNumber]));
  };

  $(document).ready(function() {// on document full load, exec the event handler.
      $("#botn").on("click", newQuote);
  });

})();
