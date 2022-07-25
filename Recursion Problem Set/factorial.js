// Write a function factorial which accepts a number and returns the factorial of that number.

function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }