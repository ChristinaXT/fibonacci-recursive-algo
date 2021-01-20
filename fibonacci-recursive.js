// Fibonnaci Array example: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function fib(n) {

  if(n < 2) {  // when n = 0 or 1 (and 2 b/c below n needs to be greater than 2 - so could also write <=)
    return n;
  }

  return fib(n - 1) + fib(n - 2); // if n is GREATER than 2, do this. This is TWO function calls, Example ONE: console.log(fib(4)) -> fib(4 - 1) + fib(4 - 2) -> 3 + 2 *BUT* only use number if n > 2, so ANSWER would be 3, meaning the fib() function would be called THREE times. Example TWO: fib(5) -> 5

}

console.log(fib(1)); // 1 -> so the 1st index (after 0 index) number in the array is 1.
console.log(fib(2)); // 1 -> so the 2nd index number in the array is 1 .
console.log(fib(3)); // 2 -> so the 3rd index number in the array is 2.
console.log(fib(4)); // 3 -> so the 4th index number in the array is 3.
console.log(fib(39)); // 63245986 -> so the 39th index number in the array is 63245986.
