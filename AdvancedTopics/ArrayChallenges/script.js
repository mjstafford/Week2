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
  // calculate the average
  var count = 0
  // count how many values are greated than the average

  sum = arr.reduce((pre, cur) => {
    return pre + cur
  })

  return sum

  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
