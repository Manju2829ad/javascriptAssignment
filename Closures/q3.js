function shoppingCart() {
    const cartItems = [];
  
    function getCartItems() {
      return cartItems;
    }
  
    return {
      getCartItems: getCartItems
    };
  }
  
  const cart = shoppingCart();
  
  console.log('Cart Items:', cart.getCartItems());