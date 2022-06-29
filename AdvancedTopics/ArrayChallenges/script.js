// 1.Always Hungry
function alwaysHungry(arr) {
  let hasFood = false
  arr.forEach(element => {
    if (element === "food") {
      hasFood = true
      console.log("yummy")
    }
  });
  if (!hasFood) {
    console.log("I'm hungry")
  }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// 2. High Past Filter
function highPass(arr, cutoff) {
  var filteredArr = [];
  // your code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i])
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// 3. Better than average
function betterThanAverage(arr) {
  var sum = 0;
  var count = 0;

  sum = arr.reduce((pre, cur) => {
    return pre + cur
  })

  var avg = sum / arr.length

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > avg) { count++ }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//5. Fibonacci Array
function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  // your code here
  for (var i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1])
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
