// 1. Function Declaration:
// Problem: Write a function called calculateArea that takes two parameters: length and width and returns the area of a rectangle.
// Test: calculateArea(5, 10) should return 50.
function calculateArea(length,width) {
    return length * width;
    
}
console.log(calculateArea(5, 10));


// 2. Function Expression:
// Problem: Create a function expression called isEven that takes a number as an argument and returns true if it’s even and false if it’s odd.
// Test: isEven(4) should return true and isEven(7) should return false.

const isEven = function(n){
    if (n%2 == 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(4));

// 3. Arrow Functions:
// Problem: Write an arrow function called square that takes a number and returns its square.
// Test: square(5) should return 25.

const square = (a)=>(a*a);
console.log(square(5));


// 4. Anonymous Function:
// Problem: Use an anonymous function inside .map() to create an array of squares from the given array.

// Array: [1, 2, 3, 4, 5]
// Expected Output: [1, 4, 9, 16, 25]
const  Array = [1, 2, 3, 4, 5];
const squares = Array.map(function(num){
    return num * num;
});
    
console.log(squares) ;

//6. Constructor Function:
// Problem: Create a constructor function called Book with properties: title, author, year.

// Add a method called getSummary that returns a string like:
// "Title by Author, published in Year".

function Book(title,author,year){
    this.booktitle = title;
    this.authorname = author;
    this.Year = year;

    this.getsummary = function(){
        console.log(`${this.booktitle} ${this.authorname} ${this.Year}`);
        
    };
};
const Book1 = new Book("cuhdww","ncihci",5622)
Book1.getsummary();


// Generator Function: idGenerator
// Here’s how to create a generator function that generates infinite IDs starting from 1.


function* idGenerator() {
let id = 1;
while (true) {
    yield id++;
    
}
}
const generate = idGenerator();
console.log(generate.next().value);

// 8. 🟢 Recursive Functions
// Calls itself to solve a problem in smaller steps.

function facto(n){
    if (n<2) {
        return 1;
        
    }
    else{
        return n * facto(n-1);
    }
}
console.log(facto(5));

// 9. Higher-Order Function:
// Problem: Write a higher-order function called applyOperation that takes two numbers and a callback function to perform an operation on them.

const addition = (a,b)=> (a+b);
const subtract = (a,b)=> (a-b);
const applyOperation = (a,b, operation)=> operation(a,b);
const result = applyOperation(2,3,addition);
console.log(result);

// 10. Returning Functions (Closure):
// Problem: Create a function called createCounter that returns another function.

// The returned function should increment and return a counter each time it’s called.


function createCounter() {
let counter = 0;
 return function() {
 counter++;
 return counter    
 }; 

 
}
const counter1 = createCounter();
console.log(counter1());





