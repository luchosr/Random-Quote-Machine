//alert("funciona el js");
var newQuote = function (){
  // alert("testeando!");
   var randomNumber = Math.floor(Math.random() * (quotes.length));
  // alert(randomNumber);
   $(".quotes").text(quotes[randomNumber]);
   };
   var quotes = [
     "\"¡D'oh!!.\" ",
     "\"Talent is the man in freedom, born in anyone who feels able to fly with their ideas.\"",
     "\"Beneath this mask there is more than flesh. Beneath this mask there is an idea, Mr Creedy. And ideas are bullet-proof!.\"",
     "\"Dream on big and dare to fail.\"",
     "\"Quality is not an act, is a habit\""
   ];
   var authors = [ "- Homer J. SImpson", "- Luis A. Spinetta",  "- V (V for vendetta)" , " - Norman Vaughan" , " - Aristotle"];

$(document).ready(function(){
  $(".btn").on("click", newQuote());


   });
   
