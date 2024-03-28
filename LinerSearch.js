const user = [
  { username: "sunejaajay", email: "sunejaajay@gmail.com" },
  { username: "jagdish", email: "jagdish@gmail.com" },
  { username: "sonusingh", email: "sonusingh@gmail.com" },
];

function isuserExit(array, val) {
  for (let item of array) {
    if (item["username"] === val) {
      return true;
    }
  }
  return false;
}

const res = isuserExit(user, "sunejaajay@gmail.com00");
console.log(res);
