

//creating an object for each card that will store that card's 
var cards =[
{
rank :"queen",
suit : "hearts",
cardImage :"images/images/queen-of-hearts.png"
},

{
rank :"queen",
suit : "diamonds",
cardImage :"images/images/queen-of-diamonds.png"
},

{
rank :"king",
suit : "hearts",
cardImage :"images/images/king-of-hearts.png"
},

{
rank :"king",
suit: "diamonds",
cardImage :"images/images/king-of-diamonds.png"
}

];

//create an empty array.This will eventually hold the cards that are in play.
var cardsInPlay = [];

 var checkForMatch = function (){

 	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}

 }
var flipCard = function(cardId){
	
var carOne;
var cardTwo;
var suit;
var cardImage;

var cardOne = cards[0];
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped  " + cards[cardId].rank);


//this code is accessing the entire first object in the cards
var cardTwo = cards[2];
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);


console.log(cards[cardId].cardImage);


console.log(cards[cardId].suit);

checkForMatch();

}

  flipCard(0);
  flipCard(2);
