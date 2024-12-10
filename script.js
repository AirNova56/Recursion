function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(factorial(5));
console.log(factorial(0)); 
console.log(factorial(1)); 

console.log(fibonacci(6)); 
console.log(fibonacci(0)); 
console.log(fibonacci(1)); 

console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([0, 0, 0])); 
console.log(sumArray([10, -10])); 

console.log(isPalindrome('racecar')); 
console.log(isPalindrome('hello')); 
console.log(isPalindrome('madam')); 
console.log(isPalindrome('')); 
console.log(isPalindrome('a')); 