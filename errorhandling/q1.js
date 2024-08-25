// Cart array to hold the products
const cart = [];

// Function to add a product to the cart
function addToCart(name, price, quantity) {
    if (!name) {
        throw new Error("Product name is required.");
    }
    if (typeof price !== 'number' || price <= 0) {
        throw new Error("Invalid product price.");
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity.");
    }

    // Add the product to the cart
    cart.push({ name, price, quantity });
}

// Function to simulate the checkout process
function checkout() {
    if (cart.length === 0) {
        throw new Error("Cart is empty. Add items before checkout.");
    }

    console.log("Proceeding to checkout...");
    // Further checkout logic can be added here
}

try {
    // Testing addToCart with various inputs
    addToCart("Laptop", 1200, 2);
    addToCart("", 30, 1);  // Should throw an error: "Product name is required."
    addToCart("Mouse", -15, 3);  // Should throw an error: "Invalid product price."
    addToCart("Keyboard", 50, "abc");  // Should throw an error: "Invalid quantity."

    // Attempting checkout
    checkout();  // Should throw an error if cart is empty
} catch (error) {
    console.error(error.message);
}
