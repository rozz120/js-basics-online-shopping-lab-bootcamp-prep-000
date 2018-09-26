var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  
  var price = Math.floor((Math.random()*100)+1)
  cart.push({itemName: item, itemPrice: price });
  console.log
 
  
  
 
// cart.push(new Object({[item]:price}))
// console.log(`${item} has been added to your cart.`)
// return cart
 }

function viewCart ()
{
  
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
