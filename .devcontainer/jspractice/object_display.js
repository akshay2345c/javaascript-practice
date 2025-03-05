const person = {
    "name": "akshay",
    "age":24,
    "address":"kadi",
    "education":"B.E IT"
}

// display techniques

// 1 Displaying the Object Properties by name

console.log(person.name + " " + person.age + " " + person.address + " " +person.education );

// 2 Displaying the Object Properties in a Loop
for (let x in person) {
     x += person[x];
    console.log(x);
    
}

// 3 Displaying the Object using Object.values()

console.log(Object.values(person));


// 4 Displaying the Object using JSON.stringify()

let text = JSON.stringify(person);
console.log(text);

// 5 Using Object.entries()

for (let[a , b] of Object.entries(person)) {
    let text1 =  a + ": " + b ;
    console.log(text1);
    
}