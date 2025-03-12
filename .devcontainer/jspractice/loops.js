// For Loop Practice Problems
// Print Numbers from 1 to 10
// Use a for loop to print numbers from 1 to 10.


for (let index = 0; index <11; index++) {
    
    // console.log(index);
    
}
// Factorial Calculation
// Write a function that takes a number and returns its factorial using a for loop.

let n = 6;
let y =1;


for (let index = 1; index <= n; index++ ) {
 y *= index;
    

  //console.log(y);
  
}

// Sum of Even Numbers
// Create a function to find the sum of all even numbers between 1 and 100.

let m = 4;
let x = 0;
for (let i = 0; i <= m; i++) {
    if (i%2 == 0) {
        x += i; 
    }

    
}
 //console.log(x);

//  Reverse an Array
//  Reverse the elements of an array using a for loop without using reverse() method.
//  Example: [1, 2, 3, 4] → [4, 3, 2, 1]

 const arr = [1,2,3,4]
 for (let i = arr.length; i >=0; i--) {
   // console.log(arr[i]);
    
    
 }

// Prime Numbers Up to N
// Write a function that prints all prime numbers up to a given number N.

const prime = 100; for (let i = 2; i <= prime; i++) {
    let perimenum = true;   
    for (let k = 2; k <= Math.sqrt(i); k++){         
         if (i % k === 0) {
            perimenum = false;
            break; 
        }
    }

    if (perimenum) {
        // console.log(i); 
    }
 }

    
// For...in Loop Practice Problems


// Print Object Properties and Values
// Use for...in to print keys and values of an object.

// const user = { name: "Akshay", age: 22 };
// Expected Output:

// makefile
// Copy
// Edit
// name: Akshay  
// age: 22

//  const obj1 = {name : "akshay", age: "22"}
//  for (const key in obj1) {
// console.log(`${key} : ${obj1[key]}`);
  
//  }

// Count String Characters
// Create a function that counts the number of characters in a string using for...in.
// Example: "hello" → 5


let str1 = "Akshay";
function convert(str) {
    return str.split("");
    
} 



 let converstr = (convert(str1));
//console.log( (convert(str1)));

 let Count = 0;
 for (const key in converstr) {
 if (key) {
    Count++;
 }
 
 }
 //console.log(Count);
 

//  Task: Given an array of numbers, print each number.

// Example Code:

const arr1 = [1,2,3,4,5,6,7]
arr1.forEach(i => {
    //console.log(i);
    
    
});


// 2️⃣ Find the Sum of All Elements
// Task: Calculate the sum of all elements in an array.

const arr2 = [1,2,3,4,5,6,7]
let total = 0;
arr2.forEach(i => {
 total += i


    
    
});
//console.log(total);

// Capitalize Each Word in an Array
// Task: Given an array of strings, capitalize the first letter of each word.

// Example Code:

const arr3 = ["akshay", "siisec","ncihee","nrhiehe","bvgfuefie"]
arr3.forEach((arr3,i,array) =>{
    array[i] = arr3.charAt(0).toUpperCase() + arr3.slice(1)
});
//console.log(arr3);

// Filter Even Numbers
// Task: Given an array of numbers, print only the even numbers.

// Example Code:
const arr4 = [15,58,36,14,78,54,15,65,15,74]
arr4.forEach(i=>{
if (i % 2 == 0 ) {
//console.log(i);
    
}

})
// Count the Number of Vowels in a String
// Task: Given a string, count the total number of vowels.

// Example Code:
const text = ["akshay","ishiwb","ncihciehe"];
let vowel = ["a","e","i","o","u"];

text.forEach(word=>{
    if (vowel.includes(word[0].toLowerCase())) {
//console.log(word);

        
    }
})
//6️⃣ Create a New Array with Modified Data
//Task: Multiply each element in the array by 2 and store it in a new array.

const arr5 = [45,55,47]
const double = [];
arr5.forEach(i=>{
    double.push(i*2);
})
//console.log(double);

//8️⃣ Count the Frequency of Each Word in a Sentence Task: Given a string, count the occurrence of each word.

