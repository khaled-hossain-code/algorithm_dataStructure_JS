import Stack from './Stack'

let wordStack = new Stack();
let word = "racecar";

function isPalindrome(word) {
    let rword = "";

    for (let index in word) {
        wordStack.push(word.charAt(index));
    }

    while (wordStack.length() > 0) {
        rword += wordStack.pop();
    }

    return rword === word;
}

console.log(isPalindrome(word));