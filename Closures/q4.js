function shoppingCart() {
    const cartItems = [];
  
    function addToCart(id, name, quantity, price) {
      const existingItem = cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cartItems.push({ id, name, quantity, price });
      }
    }
  
    function getCartItems() {
      return cartItems;
    }
  
    return {
      addToCart,
      getCartItems
    };
  }

 

  const product1={id:1,name:'Product1',price:10};
  const product2={id:2,name:'Product2',price:20};

  const cart = shoppingCart();

  cart.addToCart(product1.id, product1.name, 1, product1.price);
  cart.addToCart(product2.id, product2.name, 1, product2.price);

  console.log('Cart Items:',cart.getCartItems())