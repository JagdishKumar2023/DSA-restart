//String Anagram
// "hello" -> "llheo"
// "ajay" -> "aajy"

//condition
//lenght check (for both String )
// String "hello"
// {h:1, e:1, l:2, o:1}

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  } // for (let letter of string )

  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

// function isAnagram(string1, string2)
const check = isAnagram("sonusingh", "sonusingh");
console.log(check);

//liner time complexity o(n)
