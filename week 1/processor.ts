
// ## 1. Reverse Words in a String
// Write a function that takes a string and reverses the order of words (e.g., "Hello World" → "World Hello"). Use a loop and string methods. Avoid built-in reverse methods.

// ## 2. Array Chunking
// Given an array and a size, split the array into subarrays of the given size (e.g., [1, 2, 3, 4, 5], 2 → [[1, 2], [3, 4], [5]]). Use a loop to iterate and slice.

// ## 3. Frequency Counter
// Create a function that counts the frequency of each character in a string using an object or Map. Return the result as an object (e.g., "aabbc" → {a: 2, b: 2, c: 1}).

// ## 4. Unique Values with Set
// Write a function that takes an array and returns an array of unique values using a Set. Use a loop to populate the Set and convert it back to an array.


/**
 * I = Length of array - 1 to get that actual index position
 * If i >= 0 → Stops when i reaches 0
 * i-- /→ Decrements by 1 each time */
export function reverseString(str: String): String {
  let newStr: String = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr;
}


export function arrChunking(arr: number[], size: number) {
  
  if (arr.length -1 > size) { // Check 1
    console.log('Invalid Size')
  }
  for(let i = 0; i < arr.length; i++) {

  }
}

function FrequencyCounter() {}
console.log('asdf')