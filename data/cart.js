export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productid: "5968897c-4d27-4872-89f6-5bcb052746d7",
      Quantity: 2,
    },
    {
      productid: "77919bbe-0e56-475b-adde-4f24dfed3a04",
      Quantity: 1,
    },
  ];
}

function saveTostorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addcart(productid, quantitySelect) {
  let itemMatching;
  
  cart.forEach((item) => {
    if (productid === item.productid) {
      itemMatching = item;
    }
  });
  if (itemMatching) {
    itemMatching.Quantity += quantitySelect;
  } else {
    cart.push({
      productid: productid,
      Quantity: quantitySelect,
    });
  }
  // console.log(cart);
   saveTostorage();
}

export function updatecartquantity() {
  let cartQuantity = 0;
  cart.forEach((cartitem) => {
    cartQuantity += cartitem.Quantity;
    return cartQuantity;
  });
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  saveTostorage();
}
export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productid !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveTostorage();
}
export function removeNFromCart(productId) {
  
  for (let i = 0; i < cart.length; i++) {
     
    if (cart[i].productid === productId) {
      //console.log("Element found at index: ", i);
        let spliced = cart.splice(i, 1);
        saveTostorage();
    }
}
}
