export const cart=[{
  productid : "5968897c-4d27-4872-89f6-5bcb052746d7",
  Quantity : 2
},
{
  productid : "77919bbe-0e56-475b-adde-4f24dfed3a04",
  Quantity : 1
}];
export function addcart(productID){
 
    let itemMatching ;
 cart.forEach((item)=>{
        if(productID === item.productID){
            itemMatching = item;
        }});
        if(itemMatching){
            itemMatching.quantity +=1;
        }else {
       cart.push({
       productID : productID,
       quantity : 1
      });
  }

};


export function updatecartquantity(){

    let cartQuantity = 0;
    cart.forEach((cartitem)=>{
      cartQuantity += cartitem.quantity;
    })
    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
  
  };