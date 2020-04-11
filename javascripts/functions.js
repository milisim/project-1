// jshint esversion: 6

//req. 3b
let arrAvg = arr => {
  let sum = 0;
  let numbers = arr;
  let average;
  for (var i = 0; i < arr.length; i++) {
    sum += numbers[i];
  }
  average = sum / numbers.length;
  console.log(average);
};

//req. 3c

let arrMax = arr => {
  let maxNum = arr[0];
  arr.forEach(i => {
    if (i > maxNum) {
      maxNum = i;
    }
  });
  return maxNum;
};

//req. 3d
sumEvens = array => {
  var sum = 0;
  for (x of array) {
    if (x % 2 == 0) {
      sum = sum + x;
    }
  }
  return sum;
};
