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
 console.log(x);

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


let str1 = "hello";
function convert(str) {
    return str.split("");
    
} 
convert();
 console.log(convert(str1));
 console.log("hii");
 