var contacts = ['Jes Palmer', 'Sam Davis', 'Ashley Jones'];
function findContact(index) {
    contacts[index];
}

function addContact(name) {
    contacts.push(name);
    return contacts;
}

function updateLastContact(newName){
    contacts[contacts.length-1]=newName;
    return contacts;
}

c
var newArray = [];

for(i=0;i<oldArray.length;i++){
    newArray.push(5+(oldArray[i]))
}

//CORRECT
var cups = [1,2,3,4,5,6,7,8,9,10]
var ounces = [];

function convertToOunces(cups) {
    for(i=0;i<cups.length;i++) {
        ounces.push(cups[i]*8);
    }
    return ounces;
}


//part2 COOORECT
var scores = [83,40,55,72,59,88,99]

function passOrFail(scores){
    for(i=0;i<scores.length;i++) {
        if (scores[i]>=60){
            scores[i]='PASS';
        }else{
            scores[i]='FAIL';
        }
    }
    return scores;
}
