//Checking sum zero - Problem 1
// [-5,-4,-3,-2,0,2,4,5,8]

function SumZeroNew(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = SumZeroNew([-5, -4, -3, -2, 0, 2, 4, 5, 8]);
console.log(result);
