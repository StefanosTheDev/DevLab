# 20 JavaScript Practice Problems for Intermediate-Level Development

These problems focus on looping, data structures (arrays, objects, Maps, Sets), modern JavaScript operators (spread, rest, destructuring, etc.), and string manipulation to build strong fundamentals. Aim for clean, readable, and efficient code. Test your solutions with multiple inputs to ensure robustness.

## 1. Reverse Words in a String
Write a function that takes a string and reverses the order of words (e.g., "Hello World" → "World Hello"). Use a loop and string methods. Avoid built-in reverse methods.

## 2. Array Chunking
Given an array and a size, split the array into subarrays of the given size (e.g., `[1, 2, 3, 4, 5], 2` → `[[1, 2], [3, 4], [5]]`). Use a loop to iterate and slice.

## 3. Frequency Counter
Create a function that counts the frequency of each character in a string using an object or Map. Return the result as an object (e.g., "aabbc" → `{a: 2, b: 2, c: 1}`).

## 4. Unique Values with Set
Write a function that takes an array and returns an array of unique values using a Set. Use a loop to populate the Set and convert it back to an array.

## 5. Destructure and Sum
Given an array of objects like `[{a: 1}, {a: 2}, {a: 3}]`, use destructuring in a loop to sum the `a` values. Handle cases where `a` might be missing.

## 6. Capitalize First Letters
Write a function that capitalizes the first letter of each word in a string (e.g., "hello world" → "Hello World"). Use a loop and string methods.

## 7. Merge Arrays with Spread
Create a function that merges multiple arrays into one, removing duplicates, using the spread operator and a Set. Loop through inputs to validate they are arrays.

## 8. Anagram Checker
Write a function that checks if two strings are anagrams (same characters, same frequency, different order). Use a loop and a Map or object to compare frequencies.

## 9. Nested Object Flattening
Given a nested object like `{a: 1, b: {c: 2, d: 3}}`, flatten it to `{a: 1, c: 2, d: 3}` using a loop and recursion. Avoid built-in flat methods.

## 10. Rotate Array
Write a function that rotates an array by `k` positions (e.g., `[1, 2, 3, 4], 2` → `[3, 4, 1, 2]`). Use a loop and modulo to handle rotations.

## 11. String Compression
Compress a string by counting consecutive characters (e.g., "aaabbc" → "a3b2c1"). Use a loop to track counts and build the result string.

## 12. Map for Key-Value Swap
Given an object like `{a: 1, b: 2}`, swap keys and values `{1: a, 2: b}` using a Map and a loop. Handle cases where values are not unique.

## 13. Nullish Coalescing Defaults
Write a function that processes an array of objects with optional properties (e.g., `[{name: "John"}, {name: null}]`). Use nullish coalescing (`??`) in a loop to set default values.

## 14. Palindrome Substrings
Find all palindromic substrings in a string (e.g., "aba" → ["a", "b", "a", "aba"]). Use nested loops and string slicing to check for palindromes.

## 15. Array Intersection
Write a function that finds the intersection of two arrays (e.g., `[1, 2, 2, 3], [2, 2, 4]` → `[2, 2]`). Use a loop and a Map to track frequencies.

## 16. Rest Parameters for Aggregation
Create a function that accepts a variable number of arrays using rest parameters, then concatenates them into a single array using a loop and spread operator.

## 17. Longest Word
Write a function that finds the longest word in a string. If multiple words have the same length, return the first one. Use a loop and string splitting.

## 18. Group by Property
Given an array of objects like `[{type: "fruit", name: "apple"}, {type: "fruit", name: "banana"}, {type: "vegetable", name: "carrot"}]`, group them by `type` using a loop and an object or Map.

## 19. Optional Chaining in Loops
Process an array of nested objects like `[{user: {name: "John"}}, {user: null}]`. Use optional chaining (`?.`) in a loop to safely extract names or return a default.

## 20. String to Camel Case
Convert a string like "hello world" or "hello_world" to camelCase ("helloWorld"). Use a loop and string methods to handle different separators.

### Tips for Success
- **Test Thoroughly**: Write test cases for edge cases (e.g., empty inputs, invalid types, large inputs).
- **Write Clean Code**: Use meaningful variable names, consistent formatting, and comments for clarity.
- **Practice Patience**: Break problems into smaller steps and solve them methodically.
- **Review Weekly**: Reflect on your solutions each week to identify patterns and improve.

Each week, request new problems to build on these skills or dive deeper into specific areas!