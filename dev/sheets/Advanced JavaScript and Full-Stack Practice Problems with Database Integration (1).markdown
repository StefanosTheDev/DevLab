# 20 Advanced JavaScript and Full-Stack Practice Problems

These problems build on looping, data structures, modern JavaScript operators, and string manipulation, while introducing full-stack concepts like database interactions with MongoDB or PostgreSQL (via Prisma). They simulate real-world tasks for a full-stack developer, challenging you to write robust, scalable code. Test all solutions thoroughly with edge cases.

## 1. Sliding Window Maximum
Given an array and a window size `k`, find the maximum value in each sliding window of size `k` (e.g., `[1, 3, -1, -3, 5, 3, 6, 7], k=3` → `[3, 3, 5, 5, 6, 7]`). Use a loop and a deque-like structure with an array.

## 2. MongoDB User Aggregation
Using MongoDB, write a function that aggregates user data to count users by `age` group (e.g., 20-29, 30-39). Use a loop to process the aggregation results and format them as `{ ageGroup: count }`. Assume a `users` collection with `{ name: String, age: Number }`.

## 3. Destructure Nested Arrays
Given an array like `[[1, 2], [3, [4, 5]], 6]`, use destructuring and a loop to flatten it into `[1, 2, 3, 4, 5, 6]`. Handle arbitrary nesting depths recursively.

## 4. String Pattern Matching
Write a function that checks if a string matches a pattern with wildcards (e.g., `str="hello", pattern="h*o"` → `true`). Use a loop to compare characters, handling `*` and `?` wildcards.

## 5. Prisma Query for Post Filtering
Using Prisma with PostgreSQL, write a function that queries a `posts` table (`{ id: Int, title: String, published: Boolean }`) to return published posts with titles containing a search term. Use a loop to format results into a summary (e.g., `{ id, titleLength }`).

## 6. Merge Sorted Arrays
Merge `k` sorted arrays into one sorted array (e.g., `[[1, 4], [2, 3], [5, 6]]` → `[1, 2, 3, 4, 5, 6]`). Use a loop and a min-heap (simulated with an array) to select the smallest element.

## 7. Map for Data Transformation
Given an array of objects like `[{ id: 1, value: "a" }, { id: 2, value: "b" }]`, transform it into a Map with `id` as keys and `value` as values using a loop. Handle duplicate `id` cases by keeping the last entry.

## 8. Longest Common Prefix
Write a function that finds the longest common prefix among an array of strings (e.g., `["flower", "flow", "flight"]` → `"fl"`). Use a loop to compare characters across strings.

## 9. MongoDB Transaction for Order Processing
Using MongoDB, write a function that processes an order by updating a `products` collection (`{ id: String, stock: Number }`) and inserting into an `orders` collection (`{ productId: String, quantity: Number }`). Use a loop to validate stock availability within a transaction.

## 10. Optional Chaining with Defaults
Process an array of objects like `[{ user: { profile: { name: "John" } } }, { user: null }]` using optional chaining (`?.`) and nullish coalescing (`??`) in a loop to extract names with a default value of "Unknown".

## 11. Array Deduplication with Spread
Write a function that removes duplicates from an array of objects based on a key (e.g., `[{ id: 1, name: "a" }, { id: 1, name: "b" }], key="id"` → `[{ id: 1, name: "a" }]`). Use spread and a loop with a Set.

## 12. Prisma Pagination
Using Prisma with PostgreSQL, write a function that fetches paginated records from a `users` table (`{ id: Int, name: String }`) with a given `page` and `pageSize`. Use a loop to enrich each record with a computed field (e.g., `nameLength`).

## 13. String to Kebab Case
Convert a string like "Hello World" or "helloWorld" to kebab-case ("hello-world"). Use a loop and string methods to handle multiple input formats (spaces, camelCase, etc.).

## 14. Group and Aggregate
Given an array of objects like `[{ category: "A", value: 10 }, { category: "A", value: 20 }, { category: "B", value: 15 }]`, group by `category` and sum `value` using a loop and a Map (e.g., `{ A: 30, B: 15 }`).

## 15. MongoDB Fuzzy Search
Using MongoDB, write a function that performs a fuzzy search on a `products` collection (`{ name: String, price: Number }`) using a regex pattern. Use a loop to rank results by relevance (e.g., exact matches first).

## 16. Rest Parameters for Stats
Create a function that accepts a variable number of numeric arrays using rest parameters, then computes stats (min, max, average) for the combined array using a loop and spread operator.

## 17. Valid Parentheses
Write a function that checks if a string of parentheses is valid (e.g., `"()[]{}"` → `true`, `"([)]"` → `false`). Use a loop and a stack (array) to track opening/closing pairs.

## 18. Prisma Upsert Operation
Using Prisma with PostgreSQL, write a function that upserts records in a `settings` table (`{ userId: Int, key: String, value: String }`). Use a loop to process multiple key-value pairs for a user, ensuring unique `userId`-`key` pairs.

## 19. Subarray Sum
Given an array of numbers and a target sum, find all subarrays with the given sum (e.g., `[1, 2, 3, 4], 7` → `[[2, 3, 4]]`). Use nested loops and a Map to track cumulative sums.

## 20. Dynamic Object Filtering
Write a function that filters an array of objects based on dynamic criteria (e.g., `[{ name: "John", age: 30 }, { name: "Jane", age: 25 }], { age: 30 }` → `[{ name: "John", age: 30 }]`). Use a loop and destructuring to match properties.

### Implementation Notes
- **Database Setup**:
  - For MongoDB problems, assume a Node.js environment with `mongodb` package. Use `MongoClient` for connections and transactions.
  - For Prisma/PostgreSQL, assume a Prisma schema and a PostgreSQL database. Example schema for `users`:
    ```prisma
    model User {
      id    Int     @id @default(autoincrement())
      name  String
    }
    ```
  - Initialize Prisma with `new PrismaClient()`.
- **Testing**: Test with edge cases (e.g., empty arrays, invalid strings, missing database records).
- **Clean Code**: Use descriptive variable names, modular functions, and error handling (e.g., try-catch for database operations).
- **Full-Stack Context**: Database problems mimic CRUD operations and data processing tasks common in full-stack apps.

### Tips for Success
- Break complex problems into smaller functions for reusability.
- Use modern JavaScript features (e.g., arrow functions, async/await) to write concise code.
- Simulate real-world constraints like performance and scalability in your solutions.
- Revisit these problems weekly to refine your approach and explore optimizations.

Request more problems next week to keep progressing toward full-stack mastery!