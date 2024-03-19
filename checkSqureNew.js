// Checking Squre i another array
// arr1=[1,2,3,4], array2=[1,9,4,16] - case 1
// arr2=[1,2,4,2], arr2[]=[1,4,4,16] - case 2

// map1={1:1,2:2,4:1}
// map2={1:1,4:2, 16:1}

function checkSqure(array1, array2) {
  let map1 = {};
  let map2 = {};

  for (item of array1) {
    map1[item] = (map1[item] || 0) + 1;
  }
  console.log(map1, "Map1");

  for (item1 of array2) {
    map2[item1] = (map2[item1] || 0) + 1;
  }
  console.log("Map2", map2);

  for (let key in map1) {
    console.log("Key", key);
    if (!map2[key * key]) {
      return false;
    }
  }
}

checkSqure([1, 2, 4, 2, 4, 4, 4, 25, 45], [1, 4, 4, 16, 16, 16]);
