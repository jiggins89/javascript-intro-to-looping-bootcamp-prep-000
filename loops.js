// strange loops
const myArray = [];
function forLoop () {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      myArray.push("I am 1 strange loop.");
    }else{
       myArray.push("I am " + i + " strange loops.");
    } 
  }
  return myArray;
}

  
// while loop
function whileLoop (n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  } 
  return ("done")
}

// do-while loop
function doWhile (array) {
  var i = 0;
  function incrementVariable() {
    i = i + 1;
  }
  
  do {
    console.log("doo-bee-doo-bee-doo");
    incrementVariable();
  } while (i < 5);
}
