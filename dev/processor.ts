
// ## 1. Reverse Words in a String
// Write a function that takes a string and reverses the order of words (e.g., "Hello World" → "World Hello"). Use a loop and string methods. Avoid built-in reverse methods.

// ## 2. Array Chunking
// Given an array and a size, split the array into subarrays of the given size (e.g., [1, 2, 3, 4, 5], 2 → [[1, 2], [3, 4], [5]]). Use a loop to iterate and slice.

// ## 3. Frequency Counter
// Create a function that counts the frequency of each character in a string using an object or Map. 
//Return the result as an object (e.g., "aabbc" → {a: 2, b: 2, c: 1}).

// ## 4. Unique Values with Set
// Write a function that takes an array and returns an array of unique values using a Set. Use a loop to populate the Set and convert it back to an array.

// ## 5. Destructure and Sum
// Given an array of objects like `[{a: 1}, {a: 2}, {a: 3}]`, use destructuring in a loop to sum the `a` values. Handle cases where `a` might be missing.

// ## 6. Capitalize First Letters
// Write a function that capitalizes the first letter of each word in a string (e.g., "hello world" → "Hello World"). Use a loop and string methods.

// ## 7. Merge Arrays with Spread
// Create a function that merges multiple arrays into one, removing duplicates, using the spread operator and a Set. Loop through inputs to validate they are arrays.

// ## 8. Anagram Checker
// Write a function that checks if two strings are anagrams (same characters, same frequency, different order). Use a loop and a Map or object to compare frequencies.

// ## 9. Nested Object Flattening
// Given a nested object like `{a: 1, b: {c: 2, d: 3}}`, flatten it to `{a: 1, c: 2, d: 3}` using a loop and recursion. Avoid built-in flat methods.

// ## 10. Rotate Array
// Write a function that rotates an array by `k` positions (e.g., `[1, 2, 3, 4], 2` → `[3, 4, 1, 2]`). Use a loop and modulo to handle rotations.


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
// Review With Elijah.
export function FrequencyCounter(str: String): Record<string, number> {
  const freq: Record<string, number> = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
export function UniqueValueSet() {}
  
export function DestructureSum() {
  // Given an array of objects like `[{a: 1}, {a: 2}, {a: 3}]`, use destructuring in a loop to sum the `a` values.
  // Handle cases where `a` might be missing.
}

// Write a function that capitalizes the first letter of each
// word in a string (e.g., "hello world" → "Hello World").
// Use a loop and string methods.

export function CapitilizeFirstLetters(str: String) {
  const words = str.split(' '); // Splits the string into an array of words
  let capitalizeWords: string[] = [];

  for(let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      const capitalized = word[0].toUpperCase() + word.slice(1).toLocaleLowerCase();
      capitalizeWords.push(capitalized)
  } 
  // Break up between spaces between eaach element in the string
  // Access the 0 position of the word
  // Set it to capitilize.
  // Return it back as a string.

}
return capitalizeWords.join(' ')
}
