let order = {
    orderId: "123456",
    productName: "Laptop",
    quantity: 2
  };
  
  // Destructuring the object
  const { orderId, productName } = order;
  
  // Printing the extracted values
  console.log("Order ID:", orderId);
  console.log("Product Name:", productName);