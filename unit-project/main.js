var cardTypes = ['King', 'Queen'];
var cardsClicked = [];

//adds new card to board //Good
function appendCard(){
  var newCard = document.createElement("div");
  newCard.className = 'card';
  var board = document.getElementById('game-board')
  board.appendChild(newCard);
}

//resets the board without having to reload the page //Good
//will always run first when button clicked so that cardTypes is empty and can be re-made
function clearBoard() {
  var board = document.getElementById('game-board');
  //http://stackoverflow.com/questions/14555214/remove-all-divs-from-in-a-parent-div//
  while(board.firstChild) {
    board.removeChild(board.firstChild);
  }
  cardTypes.length = 0;
}

//flips the image of the card depending on the data-type of the clicked card
//probably has to be a switch in the future when incorporating more cards
function flipCard() {
  if (this.getAttribute('data-type')==='Queen') {
    this.innerHTML= "<img src = 'Eco/Diamonds 12.png' class='flip' alt='Queen of Diamonds'>"
  }else{
    this.innerHTML= "<img src = 'Eco/Diamonds 13.png' class='flip' alt='Queen of Diamonds'>"
  }
}

//pushes clicked card data-type into cardsClicked array
//will fire when there are 2 cards in the array
function isTwoCards(){
    cardsClicked.push(this.getAttribute('data-type'));
    if (cardsClicked.length === 2) {
      isMatch(cardsClicked);
    }
}

//loops the appendCard function in order to create card elements based on cardQuantity specified by USER
//also creates the on click listener for each card created in the loop
function createBoard (cardQuantity) {
  for (i=0;i<cardQuantity;i++){
    appendCard();
    document.getElementsByClassName('card')[i].setAttribute('data-type', cardTypes[Math.floor(Math.random() * (2));]);
    document.getElementsByClassName('card')[i].setAttribute('id', i);
    document.getElementsByClassName('card')[i].addEventListener('click', flipCard);
    document.getElementsByClassName('card')[i].addEventListener('click', isTwoCards);
    //this all needs to be refactored so flipCard pushToRemove and isTwoCards are stacked into one function for one click element
  }
}

//Game Logic!! referenced as on click functionality for the dynamic elements created in createBoard function
//checks for match of values stored in data-type that has been pushed into cardsClicked array
//if match clears class name removing the element along with the innerHTML so image and element dissapear
//if else resets the innerHTML so card image is just updated back to the back facing card
function isMatch(cardsClicked){
  if (cardsClicked[0] === cardsClicked[1]){
    for(i=0;i<cards.length;i++) {
      document.getElementById().removeEventListener('click', flipCard);
      document.getElementById().removeEventListener('click', isTwoCards);
    }
    cardsClicked = []
  }else{
    console.log('No Match Flip Cards Back')
  }
}

//puts all the event listeners for the above 3 functions onto the submit button
function setUpButton() {
    document.getElementsByClassName('button-blue')[0].addEventListener('click', clearBoard);
    document.getElementsByClassName('button-blue')[0].addEventListener('click', createRandomCards);
    document.getElementsByClassName('button-blue')[0].addEventListener('click', createBoard);
}
//You now have a button that does something!
setUpButton();
