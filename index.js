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
 return(item + " has been added to your cart.");
 }

function viewCart ()
{
  if(cart.length === 0)
  {
    return("Your shopping cart is empty.");
  }
  
  if(cart.length === 1){
    return("In your cart, you have " + getCart()[0].itemName + " at $" + getCart()[0].itemPrice + ".")
  }
  
  if(cart.length > 1)
  {
    
    var whatsInTheCart = "In your cart, you have "
    var i;
    for(i = 0; i< cart.length; i++)
    { 
      if(i + 1 === cart.length)
      {
        return (whatsInTheCart + "and " + getCart()[i].itemName + " at $" +  getCart()[i].itemPrice + ".")
      }
      
     whatsInTheCart = ( whatsInTheCart + getCart()[i].itemName + " at $" +  getCart()[i].itemPrice + ", ")
      
    }
    return whatsInTheCart;
  }
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
