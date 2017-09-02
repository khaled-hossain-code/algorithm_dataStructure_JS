function add(runningTotal, currentValue) { return runningTotal + currentValue;}

var nums = [1,2,3,4,5,6,7,8,9,10]; 
var sum = nums.reduce(add); 
console.log(sum); // displays 55


function concat(accumulatedString, item) { 
    return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "]; 
var sentence = words.reduce(concat); 
console.log(sentence); // displays "the quick brown fox"