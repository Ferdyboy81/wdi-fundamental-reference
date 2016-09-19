var sayHello = function(name) {
    return "Hello" + name;
}

var areBothEven = function(a,b) {
    if (a%2===0 && b%2===0) {
        return true;
    } else {
        return false;
    }
}

var hotOrNot = function (temp) {
    if (temp > 75) {
        return 'hot';
    } else {
        return 'not hot';
    }
}

 var threeIfNull = function (num) {
     if (num === null) {
         return 3;
     }else{
         return num;
     }
 }

var greatest = function(x, y, z) {
    if (x > y && x > z) {
        return x;
    }else if (y>z) {
        return y;
    } else {
        return z;
    }
}
