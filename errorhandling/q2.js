// Valid credentials (in a real application, this would be handled more securely)
const validUsername = "user123";
const validPassword = "password123";

// Function to simulate the user login process
function login(username, password) {
    if (!username) {
        throw new Error("Username is required.");
    }
    if (!password) {
        throw new Error("Password is required.");
    }
    if (username !== validUsername || password !== validPassword) {
        throw new Error("Invalid username or password.");
    }

    console.log("Login successful!");
}

try {
    // Testing login with various inputs
    login("user123", "password123"); // Should be successful
    login("", "password456"); // Should throw an error: "Username is required."
    login("user456", ""); // Should throw an error: "Password is required."
    login("invalidUser", "invalidPassword"); // Should throw an error: "Invalid username or password."
} catch (error) {
    console.error(error.message);
}
