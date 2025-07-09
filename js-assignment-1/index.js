// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    // Write your code here
    if (array.length < 2) return null;
  
    let largest = -Infinity;
    let second = -Infinity;
  
    for (let num of array) {
      if (num > largest) {
        second = largest;
        largest = num;
      } else if (num > second && num !== largest) {
        second = num;
      }
    }
    return second === -Infinity ? null : second;
  }
  
  // Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
  function calculateFrequency(string) {
    // Write your code here
    let result = {};
  
    for (let i = 0; i < string.length; i++) {
      let ch = string[i];
  
      if (ch >= "a" && ch <= "z") {
        if (result[ch]) {
          result[ch]++;
        } else {
          result[ch] = 1;
        }
      }
    }
    return result;
  }
  
  // Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  function flatten(unflatObject) {
    // Write your code here
    let result = {};
  
    function helper(object, parentKey) {
      for (let key in object) {
        if (object.hasOwnProperty(key)) {
          let newKey = parentKey ? parentKey + "." + key : key;
          if (typeof object[key] === "object" && object[key] !== null) {
            helper(object[key], newKey);
          } else {
            result[newKey] = object[key];
          }
        }
      }
    }
    helper(unflatObject, "");
    return result;
  }
  
  // Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
  function unflatten(flatObject) {
    // Write your code here
    const result = {};
  
    for (const key in flatObject) {
      const parts = key.split(".");
      let current = result;
  
      parts.forEach((part, index) => {
        const isLast = index === parts.length - 1;
        const nextPart = parts[index + 1];
        const isNextArray = !isNaN(nextPart);
  
        if (isLast) {
          current[isNaN(part) ? part : +part] = flatObject[key];
        } else {
          const keyToUse = isNaN(part) ? part : +part;
          if (!(keyToUse in current)) {
            current[keyToUse] = isNextArray ? [] : {};
          }
          current = current[keyToUse];
        }
      });
    }
  
    return result;
  }
  