var max = 20;
var funFunction = function(x) {
    if (x%3===0 && x%5===0) {
        return 'fizzbuzz';
    } else if (x%5 === 0) {
        return 'buzz';
    } else if (x%3===0) {
        return 'fizz';
    } else {
        return x;
    }
}
for (i=1; i<=max; i++) {
    var result = funFunction(i);
};
console.log(result);
