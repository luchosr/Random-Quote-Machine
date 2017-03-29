//alert("funciona el js");
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
   var authors = [ "- Homer J. SImpson", "- Luis A. Spinetta",  "- V (V for vendetta)" , " - Norman Vaughan" , " - Aristotle", "- Andrew Hendrixson",
   "- Albert Einstein", "- Henry David Thoreau","- John Maxwell"];

  //  var tweetOut = function(){
  //    $(".tw").attr("href",'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quotes[randomNumber] + '" ' + authors[randomNumber]));
  //  };

var newQuote = function(){
  // alert("testeando!");
   var randomNumber = Math.floor(Math.random() * (quotes.length));
  // alert(randomNumber);
   $(".quotes").html(quotes[randomNumber]);
   $(".author").html(authors[randomNumber]);
   $(".tw").attr("href",'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quotes[randomNumber] + '" ' + authors[randomNumber]));
   };


$(document).ready(function(){

  $("#botn").on("click",newQuote);
 // alert("hola ke ase");
  // $(".tw").on("click", tweetOut);
    //  window.open("https://twitter.com/intent/tweet?text=" + quotes[randomNumber] + " " + authors[randomNumber]);

   });
