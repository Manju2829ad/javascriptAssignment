function shoppingCart() {
    const cartItems = [];
  
    function addToCart(productId, name, quantity, price) {
      const existingItem = cartItems.find(item => item.productId === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cartItems.push({ productId, name, quantity, price });
      }
    }
  
    function getCartItems() {
      return cartItems;
    }
  
    function removeItemFromCart(productId) {
      const index = cartItems.findIndex(item => item.productId === productId);
      if (index !== -1) {
        cartItems.splice(index, 1);
      }
    }
  
    return {
      addToCart,
      getCartItems,
      removeItemFromCart
    };
  }
  
  const cart = shoppingCart();
  
  const product1 = { id: 1, name: 'Product1', price: 10 };
  const product2 = { id: 2, name: 'Product2', price: 20 };
  
  cart.addToCart(product1.id, product1.name, 1, product1.price);
  cart.addToCart(product2.id, product2.name, 1, product2.price);
  
  console.log(cart.getCartItems()); // Output: [{productId: 1, name: "Product1", quantity: 1, price: 10}, {productId: 2, name: "Product2", quantity: 1, price: 20}]
  
  cart.removeItemFromCart(product1.id);
  
  console.log(cart.getCartItems()); // Output: [{productId: 2, name: "Product2", quantity: 1, price: 20}]