//Cheaking Squre in another array
// arr1=[1,2,3,4], array2=[1,9,4,16]
// if (array1[i] * array1[j] === array2[j] )
// let isSqure=true

function isSqureCheck(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let isSqure = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[i] === array2[j]) {
        isSqure = true;
      }
      if (j === array2.length - 1) {
        if (!isSqure) {
          return false;
        }
      }
    }
  }
  return true;
}

const result = isSqureCheck([1, 2, 3, 4, 5, 6, 7], [1, 9, 4, 16, 25, 36, 48]);
console.log(result);

//time complexity O(n^2)
