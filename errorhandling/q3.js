function processPayment(amount, cardNumber, expirationDate) {
    // Helper function to check if a date is in the past
    function isDateInPast(date) {
        const today = new Date();
        const expiration = new Date(date);
        return expiration < today;
    }

    // Check for invalid payment amount
    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error("Invalid payment amount.");
    }

    // Check for invalid card number (assuming a simple check here, can be extended)
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
        throw new Error("Invalid card number.");
    }

    // Check for invalid or past expiration date
    if (!expirationDate || isDateInPast(expirationDate)) {
        throw new Error("Invalid expiration date.");
    }

    // If all validations pass, process the payment
    console.log("Payment processed successfully!");
}

try {
    // Test cases
    processPayment(1500, "1234567812345678", "2025-12-31"); // Should succeed
    processPayment(-100, "1234567812345678", "2025-12-31"); // Should throw "Invalid payment amount."
    processPayment(1500, "", "2025-12-31"); // Should throw "Invalid card number."
    processPayment(1500, "1234567812345678", "2020-12-31"); // Should throw "Invalid expiration date."
} catch (error) {
    console.error(error.message);
}
