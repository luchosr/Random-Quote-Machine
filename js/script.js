//alert("funciona el js");
   var quotes = [
     "\"¡D'oh!!.\"",
     "\"Talent is the man in freedom, born in anyone who feels able to fly with their ideas.\"",
     "\"Beneath this mask there is more than flesh. Beneath this mask there is an idea, Mr Creedy. And ideas are bullet-proof!.\"",
     "\"Dream on big and dare to fail.\"",
     "\"Quality is not an act, is a habit\""
   ];
   var authors = [ "- Homer J. SImpson", "- Luis A. Spinetta",  "- V (V for vendetta)" , " - Norman Vaughan" , " - Aristotle"];

var newQuote = function(){
  // alert("testeando!");
   var randomNumber = Math.floor(Math.random() * (quotes.length));
  // alert(randomNumber);
   $(".quotes").html(quotes[randomNumber]);
   $(".author").html(authors[randomNumber]);
   };

$(document).ready(function(){
  
  $("#botn").on("click",newQuote);
  alert("hola ke ase");


   });
   
