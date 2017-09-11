var nums = []; 

function isEven(num) { 
    return num%2==0;
}

function isOdd(num) { 
    return num%2!=0;
}

for(vari=0;i<20;++i){
   nums[i] = i+1;
}

var evens = nums.filter(isEven); 
console.log("Even numbers: " + evens);

var odds = nums.filter(isOdd); 
console.log("Odd numbers: " + odds);