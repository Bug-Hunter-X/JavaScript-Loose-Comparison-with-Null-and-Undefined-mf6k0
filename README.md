# JavaScript Loose Comparison with Null and Undefined

This repository demonstrates a common pitfall in JavaScript: the unexpected behavior of loose comparison (==) with null and undefined. 

The `bug.js` file shows a function `foo` that attempts to handle null values. However, due to loose comparison, it fails when `undefined` is passed.

The `bugSolution.js` file offers a corrected version using strict equality (===), which correctly distinguishes between null and undefined.

## Running the Code

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run each file to observe the output.

## Learning Points

- Loose comparison (==) in JavaScript can lead to unexpected results due to type coercion.
- It is best practice to use strict equality (===) for comparisons to avoid these issues.
- Always explicitly handle null and undefined values to avoid unexpected behavior in your code.