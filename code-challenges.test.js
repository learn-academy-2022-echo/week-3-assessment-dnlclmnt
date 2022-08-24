// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibSequence", () => {
    it("takes in a number greater than 2, and returns an array of that length containing the numbers of the fibbonaci sequence", () => {
        expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// GOOD FAIL  ./jest.test.js
//   fibSequence
//   ✕ takes in a number greater than 2, and returns an array of that length containing the numbers of the fibbonaci sequence (1 ms)

// ● fibSequence › takes in a number greater than 2, and returns an array of that length containing the numbers of the fibbonaci sequence

//   ReferenceError: fibSequence is not defined


// b) Create the function that makes the test pass.

// create function that takes a number greater than 2
// create result array with 0 and 1 - starting numbers for fibonacci sequence
// iterate until i <= num, i starting on 2 due to 2 items already being in array
    // on each iteration, push into result array the last number added with the number before the last
// use slice method to remove 0 from result array, giving the array the correct length and number sequence


const fibSequence = (num) => {
    let result = [0, 1]

    if (num > 2) {
    for (let i = 2; i <= num; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
}
    let finalResult = result.slice(1)
    return finalResult
}

// PASS  ./jest.test.js
// fibSequence
//   ✓ takes in a number greater than 2, and returns an array of that length containing the numbers of the fibbonaci sequence (6 ms)


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("onlyOddSorted", () => {
    it("takes in an array and returns new array of only odd numbers sorted from least to greatest", () => {
        expect(onlyOddSorted(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOddSorted(fullArr2)).toEqual([-823, 7, 23])
    })
})

// GOOD FAIL  ./jest.test.js
// fibSequence
//   ✓ takes in a number greater than 2, and returns an array of that length containing the numbers of the fibbonaci sequence (6 ms)
// onlyOddSorted
//   ✕ takes in an array and returns new array of only odd numbers sorted from least to greatest (2 ms)

// ● onlyOddSorted › takes in an array and returns new array of only odd numbers sorted from least to greatest

//   ReferenceError: onlyOddSorted is not defined


// b) Create the function that makes the test pass.

// Create an empty result array to be returned
// Iterate over the length of the array
    // Conditional to check if number is odd (using modulo operator) and if the item in the array is a number, using typeof
        // Push that item into the result array if it meets the conditionals
// Use sort method on result array to ensure it's sorted from least to greatest
// Return result

const onlyOddSorted = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && typeof arr[i] === "number") {
            result.push(arr[i])
        }
    }
    result = result.sort((a, b) => a - b)
    return result;
}

// PASS  ./jest.test.js
// fibSequence
//   ✓ takes in a number greater than 2, and returns an array of that length containing the numbers of the fibbonaci sequence (3 ms)
// onlyOddSorted
//   ✓ takes in an array and returns new array of only odd numbers sorted from least to greatest (1 ms)


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("sumFun", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
        expect(sumFun(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumFun(numbersToAdd2)).toEqual([0, 7, -1, 11])
    })
})

// GOOD FAIL  ./jest.test.js
// fibSequence
//   ✓ takes in a number greater than 2, and returns an array of that length containing the numbers of the fibbonaci sequence (2 ms)
// onlyOddSorted
//   ✓ takes in an array and returns new array of only odd numbers sorted from least to greatest (1 ms)
// sumFun
//   ✕ takes in an array and returns an array of the accumulating sum

// ● sumFun › takes in an array and returns an array of the accumulating sum

//   ReferenceError: sumFun is not defined



// b) Create the function that makes the test pass.

// Create empty result array that will be returned
// Create a sum variable, starting at 0. We will use sum to add each number across the array to it.
// Iterate over the length of the passed in array
    // For each item in the array, add sum to array at that specific index
    // push the sum into the result array
// Return result

const sumFun = (arr) => {
    let result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        result.push(sum)
    }
    return result;
}

// PASS  ./jest.test.js
// fibSequence
//   ✓ takes in a number greater than 2, and returns an array of that length containing the numbers of the fibbonaci sequence (3 ms)
// onlyOddSorted
//   ✓ takes in an array and returns new array of only odd numbers sorted from least to greatest (1 ms)
// sumFun
//   ✓ takes in an array and returns an array of the accumulating sum (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.436 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.27s.
