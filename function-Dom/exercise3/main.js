document.querySelectorAll('.current')[1].textContent = 'Me Talk Pretty One Day';
document.getElementById('next').innerHTML = '<a href="http://www.amazon.com/Flamethrowers-Rachel-Kushner/dp/1439142017/ref=sr_1_1?ie=UTF8&qid=1458897183&sr=8-1&keywords=the+flamethrowers">The Flamethrowers</a>'

document.querySelector('li').innerHTML = 'The Wind Up <strong>Bird</strong> Chronicle'
document.querySelectorAll('li')[3].textContent = 'I am the fourth';

var myArray = document.getElementsbyTagName('li');
for (i=0; i<myArray.length; i++) {
myArray[i].textContent = 'Java Script Rules!!'
}

var myOtherArray = document.getElementsByClassName('current')
myOtherArray[0].innerHTML = 'Manipulating the Dom is Fun!'

//EXERCISE TWO JS BELOW

var myArray = document.getElementsByClassName('current');

for (i=0; i<myArray.length; i++) {
    myArray[i].textContent = 'finished';
}

var button = document.getElementById('chill');

var myArray = document.getElementsByTagName('li');

var loopThis = function() {
    for (i=0; i<myArray.length;i++) {
        myArray[i].className = 'cool';
        myArray[i].removeAttribute('id');
    }
}

var clickThis = document.getElementsByTagName('li')[0];

var addThis = function() {
    var newListItem = document.createElement('li');
    newListItem.textContent = 'Javascript is Awesome';
    document.getElementsByTagName('ul')[0].appendChild(newListItem);
}

clickThis.addEventListener('click', addThis);

var theBiggest = function(a,b,c,d) {
    if (a>b && a>c && a>d) {
        return a;
    }else if(b>c && b>d){
        return b ;
    }else if (c>d){
        return c;
    }else{
        return d;
    }
}
