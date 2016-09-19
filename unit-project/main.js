var cardTypes = [];
var cardsInPlay = [];
var cardsToRemove = [];

//resets the board without having to reload the page
//will always run first when button clicked so that cardTypes is empty and can be re-made
function clearBoard() {
    var board = document.getElementById('game-board');
    //http://stackoverflow.com/questions/14555214/remove-all-divs-from-in-a-parent-div//
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
    cardTypes.length = 0;
}

//makes it so that cardTypes is set up dynamically and randomly when button clicked
//can be fleshed out to incorporate as many values and cards as you would want (switch functionality)
//also think about customization for more matching options
function createRandomCards() {
    var numberOfCards = document.getElementsByName("quantity")[0].value;
    for(i=0;i<numberOfCards;i++) {
        var random = Math.floor(Math.random()*2)
        if(random === 0) {
            cardTypes.push('King');
        }else{
            cardTypes.push('Queen');
        }
    }
}

//pushes clicked item's id into an array for use later
function pushToRemove () {
    cardsToRemove.push(this.id);
}
//resets cardsToRemove array so that it's always blank when running a match
function clearRemoveArray(){
    cardsToRemove =[];
}
//keeps cardTypes array updated so that cards in play = length of the array
function updateCardTypesArray(){
    cardTypes.length = cardTypes.length-2;
}

//loops the appendCard function in order to create card elements based on the cardTypes length
//also creates the on click listener for each card created in the loop
function createBoard () {
    function appendCard(){
        var newCard = document.createElement("div");
        newCard.className = 'card';
        var board = document.getElementById('game-board')
        board.appendChild(newCard);
    }
    for (i=0;i<cardTypes.length;i++){
        i*appendCard();
        document.getElementsByClassName('card')[i].setAttribute('data-type', cardTypes[i]);
        document.getElementsByClassName('card')[i].setAttribute('id', i);
        document.getElementsByClassName('card')[i].addEventListener('click', flipCard);
        document.getElementsByClassName('card')[i].addEventListener('click', pushToRemove);
        document.getElementsByClassName('card')[i].addEventListener('click', isTwoCards);
        //maybe add event listener for removing the element after a match - ask people//
    }
}



//Game Logic!! referenced as on click functionality for the dynamic elements created in createBoard function
//checks for match of values stored in data-type that has been pushed into cardsInPlay array
//if match clears class name removing the element along with the innerHTML so image and element dissapear
//if else resets the innerHTML so card image is just updated back to the back facing card
function isMatch(cardsInPlay){
    if (cardsInPlay[0] === cardsInPlay[1]){
        alert('Great Match!');
        for(i=0;i<cardsToRemove.length;i++) {
            document.getElementById(parseInt(cardsToRemove[i])).className='';
            document.getElementById(parseInt(cardsToRemove[i])).innerHTML='';
        }
        clearRemoveArray();
        updateCardTypesArray();
    }else{
        alert('No Match No Dice');
        for(i=0;i<cardTypes.length;i++) {
            document.getElementsByClassName('card')[i].innerHTML = '';
        }clearRemoveArray();
    }
}

//pushes clicked card data-type into cardsInPlay array
//will fire when there are 2 cards in the array
function isTwoCards(){
    cardsInPlay.push(this.getAttribute('data-type'));
    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];
    }
}

//flips the image of the card depending on the data-type of the clicked card
//probably has to be a switch in the future when incorporating more cards
function flipCard() {
    if (this.getAttribute('data-type')==='Queen') {
        this.innerHTML= "<img src = 'Eco/Diamonds 12.png' class='flip' alt='Queen of Diamonds'>"
    } else {
        this.innerHTML= "<img src = 'Eco/Diamonds 13.png' class='flip' alt='Queen of Diamonds'>"
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

/* There is an issue where isMatch is run on the else side of the if statment. The function is trying to act on cardTypes.Length but since we have removed some of the objects referenced there it cannot run the command and breaks the code. Have to figure out a way to dynamically update cardTypes as things are removed*/
