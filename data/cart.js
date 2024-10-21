export const cart=[{
  productid : "dd82ca78-a18b-4e2a-9250-31e67412f98d",
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