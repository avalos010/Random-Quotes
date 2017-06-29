function Quote(quote,author) {
  this.quote = quote;
  this.author = author;
}

var quoteHtml = document.querySelector('.quote');
var authorHtml = document.querySelector('.author');

var chanelQuote = new Quote('“How many cares one loses when one decides not to be something but to be someone.”', '-Gabrielle “Coco” Chanel');

var oliverQuote = new Quote('“Do your own thing on your own terms and get what you came here for.”','-Oliver James');

var cyrilQuote = new Quote('“Better to write for yourself and have no public, than to write for the public and have no self.”','-Cyril Connolly');

var kanyeQuote = new Quote("'I won't go into a big spiel about reincarnation, but the first time I was in the Gucci store in Chicago was the closest I've ever felt to home.'",'-Kanye West');

var paulaQuote = new Quote("'I'm tired of people not treating me like the gift that I am.'",'-Paula Abdul');

var quotes = [paulaQuote,kanyeQuote,cyrilQuote,oliverQuote,chanelQuote];


function randomQuote() {
var rand = Math.floor(Math.random() * (5 - 1) + 1);
 quoteHtml.textContent = quotes[rand].quote;
 authorHtml.textContent = quotes[rand].author;
}

document.querySelector('.gen-btn').addEventListener('click',randomQuote);