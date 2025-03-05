// Problem: Car Rental System
// Create a constructor function named Car that represents a car in a rental system. The Car constructor should have the following properties:

// make (string) - The car's manufacturer (e.g., "Toyota").
// model (string) - The car's model (e.g., "Corolla").
// year (number) - The year the car was made.
// rented (boolean) - Defaults to false, indicating if the car is rented or not.
// Add the following methods to the Car constructor:

// rent():

// If the car is not already rented, mark it as rented and log:
// php-template
// Copy
// Edit
// "<make> <model> has been rented."
// If it is already rented, log:
// php-template
// Copy
// Edit
// "Sorry, <make> <model> is already rented."
// returnCar():

// If the car is rented, mark it as not rented and log:
// php-template
// Copy
// Edit
// "Thank you for returning the <make> <model>."
// If the car is not rented, log:
// php-template
// Copy
// Edit
// "<make> <model> was not rented."
// carInfo():

// Log the car's information in this format:
// php-template
// Copy
// Edit
// "Make: <make>, Model: <model>, Year: <year>, Rented: <true/false>"

/*function Car(Make,Model,Year){
    this.company = Make,
    this.ModelName = Model,
    this.year = Year,
    this.rented = false

    this.rent = function(){
        if (this.rented) {
            console.log(`Sorry, ${this.company} ${this.ModelName} is already rented.`);
            
        }
        else{
            this.rented = true;
            console.log(`your ${this.company} ${this.ModelName} is ready for rent, thanks for trusting us`);
            
        }
    }
    this.returncar = function(){
        this.rented = false;
        console.log(`thanks for reterning ${this.company} ${this.ModelName} this is your bill, thanks for chhosing us`);
        
    }
this.carinfo = function(){
    console.log(`this your car details ${this.company} ${this.ModelName} ${this.year} ${this.rented}`);
    
}
}
const Car1 = new Car("Maruti","brezza",2024);
Car1.carinfo()
Car1.rent()
Car1.rent()
Car1.carinfo()
Car1.returncar()
Car1.carinfo()
*/




// You are building an inventory management system for an online store. Create an object named store that has the following properties and methods:

// 🛒 Properties:
// name (string) - The name of the store.
// location (string) - The location of the store.
// inventory (array of objects) - An array that stores information about each product. Each product should have:
// id (number) - A unique identifier for the product.
// name (string) - The product name.
// price (number) - The price of the product.
// quantity (number) - How many units are available.
// 🛠 Methods:
// addProduct(product):

// Adds a new product to the inventory array.
// The product parameter is an object with id, name, price, and quantity properties.
// sellProduct(productId, quantity):

// Decreases the quantity of the specified product if enough stock is available.
// Logs "Sold <quantity> of <product name>." if successful.
// Logs "Insufficient stock for <product name>." if not enough stock.
// Logs "Product not found." if the product ID doesn’t exist.
// totalValue():

// Calculates and returns the total value of all products in the inventory (price × quantity for each product).
// inventoryReport():

// Logs each product's details in this format:
// php-template
// Copy
// Edit
// "ID: <id>, Name: <name>, Price: <price>, Quantity: <quantity>"






function Store(name, location) {
    this.StoreName = name;
    this.StoreLocation = location;
    this.inventory = [];

    // Method to add products to the inventory
    this.addProduct = function (Products) {
        this.inventory.push(Products);
    };

    // Method to sell products
    this.SellProduct = function (productId, Quantity) {
        const product = this.inventory.find(item => item.id === productId);
        if (!product) {
            console.log("This product is not available.");
        } else if (product.quantity < Quantity) {
            console.log("Stock not available.");
        } else {
            product.quantity -= Quantity;
            console.log(`Your product ${product.name} sold ${Quantity} units and your bill is ${Quantity*product.price}`);
        }
    };

    // Method to calculate total inventory value
    this.totalValue = function () {
        return this.inventory.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    // Method to generate inventory report
    this.inventoryReport = function () {
        this.inventory.forEach(product => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
        });
    };
}
50000
// Creating an instance of Store
const myStore = new Store("Tech Bazaar", "Gujarat");

// Adding products to the store
myStore.addProduct({ id: 1, name: "Laptop", price: 75000, quantity: 10 });
myStore.addProduct({ id: 2, name: "Phone", price: 20000, quantity: 5 });
myStore.addProduct({ id: 3, name: "Headphones", price: 1500, quantity: 20 });

// Generating inventory report
myStore.inventoryReport();

// Selling products
myStore.SellProduct(2, 3);  // Sells 3 phones
myStore.SellProduct(2, 3);  // Not enough stock

// Displaying total inventory value
console.log("Total Inventory Value: ₹" + myStore.totalValue());






