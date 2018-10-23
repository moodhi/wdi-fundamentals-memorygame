


var cards =["queen" , "king" , "king" , "king"];

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

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped  " +  cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped  " +  cardTwo);

checkForMatch();

}

  flipCard(0);
  //flipCard(2);
