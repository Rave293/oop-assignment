class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = []; // Array to store ShoppingCartItem instances
    }

    // Method to get the total of items inside the cart
    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Method to add items
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if item already exists
        } else {
            this.items.push(new ShoppingCartItem(product, quantity)); // Add new item
        }
    }

    // Method to remove items
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display cart items
    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name}: ${item.quantity} @ $${item.product.price} each, Total: $${item.getTotalPrice()}`);
        });
    }
}

// Create products
const apple = new Product(1, 'Apple', 0.5);
const banana = new Product(2, 'Banana', 0.25);
const orange = new Product(3, 'Orange', 0.75);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(apple, 4);
cart.addItem(banana, 6);
cart.addItem(orange, 2);

// Display the cart
console.log('Cart Items:');
cart.displayItems();

// Display the total cost
console.log(`Total Cost: $${cart.getTotal()}`);

// Remove an item from the cart
cart.removeItem(2); // Remove bananas

// Display the updated cart
console.log('Updated Cart Items:');
cart.displayItems();

// Display the updated total cost
console.log(`Updated Total Cost: $${cart.getTotal()}`);
