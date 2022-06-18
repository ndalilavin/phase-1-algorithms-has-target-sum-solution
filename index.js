function hasTargetSum(array, target) {
  // Write your algorithm here
    for( i =0; i<array.length; i++){
      const compliment = target - array[i];
      for(let j = i+1; j<array.length; j++){
        if( array[j] === compliment)return true;
      }

      }
      //if end of array, return false
      return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity is o(n) hence it is linear
  The space complexity is o(n) since the seenNumbers will grow in proportion to the size of the input array
*/

/* 
  Add your pseudocode here
  Write a function hasTargetSum that adds two arrays that add up to target
  If the target is right, then return true and if not return false.
*/

/*
  Add written explanation of your solution here
  //The i represents one of numbers in an array and j represents another one in which the loop iterates over it to 
  //ensure the target is met which after iteration returns true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
