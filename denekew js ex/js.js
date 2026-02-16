
 /*1. Write a simple JavaScript program that takes an array of numbers and 
returns only the numbers that are even and also have even indices*/
/*function filter(arr) {
    return arr.filter((num, index) => index % 2 === 0 && num % 2 === 0);
}

// Test examples
const numbers1 = [2, 3, 4, 6, 8, 10];
const numbers2 = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers3 = [0, 1, 2, 3, 4, 5];
const numbers4 = [2, 1, 8, 4, 12, 3];

console.log(filter(numbers1));  // [2, 4, 8]
console.log(filter(numbers2));  // []
console.log(filter(numbers3));  // [0, 2, 4]
console.log(filter(numbers4));  // [2, 8, 12]

/* 2. Write a simple JavaScript program that takes numbers from the user, 
stores them in an array, and returns the minimum and maximum number.*/ // Ask the user how many numbers they want to input
/*function findMinMaxFromUserInput() {
    // Ask user for how many numbers
    const count = parseInt(prompt("How many numbers would you like to input?"));
    
    // Validate the input
    if (isNaN(count) || count <= 0) {
        console.log("Please enter a valid positive number.");
        return;
    }
    
    const numbers = [];
    
    // Collect numbers from the user
    for (let i = 0; i < count; i++) {
        const input = prompt(`Enter number ${i + 1} of ${count}:`);
        const num = parseFloat(input);
        
        // Validate each number
        if (isNaN(num)) {
            console.log(`"${input}" is not a valid number. Please try again.`);
            i--; // Retry this input
            continue;
        }
        
        numbers.push(num);
    }
    
    // Find min and max
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    // Display results
    console.log(`Numbers entered: [${numbers.join(', ')}]`);
    console.log(`Minimum number: ${min}`);
    console.log(`Maximum number: ${max}`);
    
    return { numbers, min, max };
}

// Run the program
findMinMaxFromUserInput();

/* 3. Write a simple JavaScript program that takes an array of numbers and returns the sum of their cubes.*/
/*function sumOfCubes(arr) {
    return arr.reduce((total, num) => total + (num ** 3), 0);
}

// Test examples
console.log(sumOfCubes([1, 2, 3]));         // 36 (1³ + 2³ + 3³ = 1 + 8 + 27 = 36)
console.log(sumOfCubes([2]));               // 8 (2³ = 8)
console.log(sumOfCubes([0, 1, 5]));         // 126 (0 + 1 + 125 = 126)
console.log(sumOfCubes([-2, 3]));           // 19 ((-2)³ + 3³ = -8 + 27 = 19)
console.log(sumOfCubes([]));                // 0 (empty array)

/* 4. Write a simple JavaScript  function that takes an array as an argument and returns true or false 
depending on whether the average of all elements in the array is a whole number or not.*/
/*function isWholeNumberAverage(arr) {
    if (arr.length === 0) return false; // Handle empty array
    
    const sum = arr.reduce((total, num) => total + num, 0);
    const average = sum / arr.length;
    
    return Number.isInteger(average);
}

// Test examples
console.log(isWholeNumberAverage([1, 2, 3, 4]));      // false (average = 2.5)
console.log(isWholeNumberAverage([1, 2, 3, 4, 5]));   // true (average = 3)
console.log(isWholeNumberAverage([1, 3, 5]));         // true (average = 3)
console.log(isWholeNumberAverage([1, 2]));            // false (average = 1.5)
console.log(isWholeNumberAverage([10, 20, 30]));      // true (average = 20)
console.log(isWholeNumberAverage([]));                // false (empty array)
console.log(isWholeNumberAverage([0, 0, 0]));         // true (average = 0)

/*5. Write a function that returns true if an array is special, and false otherwise. 
 An array is special if every even index contains an even number and every odd index
  contains an odd number.*/
/*function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        // For even indices: check if number is even
        // For odd indices: check if number is odd
        if (i % 2 === 0) {
            if (arr[i] % 2 !== 0) return false;
        } else {
            if (arr[i] % 2 === 0) return false;
        }
    }
    return true;
}

// Test examples
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));  // true
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));  // false
console.log(isSpecialArray([2, 7, 8, 9, 6, 1, 6, 3]));  // true
console.log(isSpecialArray([1, 2, 3, 4]));              // false
console.log(isSpecialArray([0, 1, 2, 3]));              // true
console.log(isSpecialArray([]));                        // true

/*6. Write a function that inserts a white space between every instance of a lower character 
followed immediately by an upper character. Examples insertWhitespace("SheWalksToTheBeach") 
➞ "She Walks To The Beach" insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"*/
/*function insertWhitespace(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}

// Test examples
console.log(insertWhitespace("SheWalksToTheBeach"));   // "She Walks To The Beach"
console.log(insertWhitespace("MarvinTalksTooMuch"));   // "Marvin Talks Too Much"
console.log(insertWhitespace("TheGreatestUpsetInHistory")); // "The Greatest Upset In History"
console.log(insertWhitespace("JavaScriptIsAwesome"));  // "JavaScript Is Awesome"
console.log(insertWhitespace("HelloWorld"));           // "Hello World"

/*7. Write a javascript function that moves all capital letters to the front of a word.
 Examples capToFront("hApPy") ➞ "APhpy" capToFront("moveMENT") ➞ "MENTmove“ */
/*function capToFront(str) {
    let capitals = '';
    let lowers = '';
    
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            capitals += char;
        } else {
            lowers += char;
        }
    }
    
    return capitals + lowers;
}

// Test examples
console.log(capToFront("hApPy"));      // "APhpy"
console.log(capToFront("moveMENT"));   // "MENTmove"

/*8. write a function that takes a string and returns the middle character(s). 
If the word's length is odd, return the middle character. If the word's length 
is even, return the middle two characters.*/
/*function getMiddle(str) {
    const length = str.length;
    const middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        // Even length: return middle two characters
        return str.substring(middle - 1, middle + 1);
    } else {
        // Odd length: return middle character
        return str.charAt(middle);
    }
}

// Test examples
console.log(getMiddle("test"));       // "es"
console.log(getMiddle("testing"));    // "t"
console.log(getMiddle("middle"));     // "dd"
console.log(getMiddle("A"));          // "A"
console.log(getMiddle("AB"));         // "AB"

/*9. write a function that takes a string and returns the middle character(s). 
If the word's length is odd, return the middle character. If the word's length
 is even, return the middle two characters.
Examples
getMiddle("test") ➞ "es" getMiddle("testing") ➞ "t" getMiddle("middle") ➞ "dd" 
getMiddle("A") ➞ "A" */
/*function getMiddle(str) {
    const length = str.length;
    const middle = Math.floor(length / 2);
    
    if (length === 0) return "";
    if (length % 2 === 0) {
        // Even length: return middle two characters
        return str[middle - 1] + str[middle];
    } else {
        // Odd length: return middle character
        return str[middle];
    }
}

// Test the given examples
console.log(getMiddle("test"));      // "es"
console.log(getMiddle("testing"));   // "t"
console.log(getMiddle("middle"));    // "dd"
console.log(getMiddle("A"));         // "A" */


