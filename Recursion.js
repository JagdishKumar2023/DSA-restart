//Recursion : When Function call itself
//otherwise it wil get called for infinite time
// If a function call itself then there must be an end point

let counter = 1;
function demo(number) {
  if (counter > number) {
    return;
  }
  console.log("Like this video" + counter);
  counter++;
  demo(number);
}
demo(10);
