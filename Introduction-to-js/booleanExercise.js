//First Answer
function returnValue(x) {
    if (x != null) {
        return x;
    } else {
        return 100;
    }
};

console.log(returnValue());
//Second Answer
function returnNextValue(x) {
    if (x === null) {
        return x;
    } else {
        return 50;
    }
}
console.log(returnNextValue());

function returnFinalValue(x) {
    if (x == '') {
        return true;
    } else {
        return false;
    }
}
console.log(returnNextValue());
