

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

 	if(cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} 
else 

{
alert("Sorry, try again.");
}
 }
var flipCard = function(){

  var cardId = this.getAttribute("data-id");

  var suit;

  var cardImage;

   console.log(cards[cardId].cardImage)

   this.setAttribute("src",cards[cardId].cardImage);


  if (cardsInPlay.length === 0){  

    var cardOne = cards[0];  

    cardsInPlay.push(cards[cardId].rank); 

  } 

  else{   

    var cardTwo = cards[2];

    cardsInPlay[1] = (cards[cardId].rank);
     checkForMatch();

  } 


  console.log("User flipped " + cards[cardId].rank);

  console.log(cards[cardId].cardImage);

  console.log(cards[cardId].suit);


 


}
   var createBoard =function(){

   

    for (var i = 0; i < cards.length; i++) {
    // Logic here
    var cardElement= document.createElement("IMG");
  
            
        cardElement.setAttribute("src" , "images/images/back.png" );
       
        cardElement.setAttribute("data-id", +i );

   cardElement.addEventListener("click",flipCard);

   document.getElementById('game_board').appendChild(cardElement);


}
  }

createBoard(); 
 
