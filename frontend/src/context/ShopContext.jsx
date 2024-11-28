import React, {createContext, useState} from "react";
import all_product from '../components/assets/all_product'

export const ShopContext=createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
       cart[index]=0;
        
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartitem,setcartitem]=useState(getDefaultCart())
    const addtocart =(itemId)=>{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartitem,itemId)
    }
    const removefromcart =(itemId)=>{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
   const gettotalcart=()=>{
    let totalamount=0;
    for (const item in cartitem){
        if(cartitem[item]>0){
           let iteminfo=all_product.find((product)=>product.id===Number(item)) 
            totalamount+=iteminfo.new_price*cartitem[item]
        }
        
    }
    return totalamount;
   }
   const gettotalcartitems=()=>{
    let totalitem=0;
    for(const item in cartitem){
        if(cartitem[item]>0){
            totalitem+=cartitem[item];
        }
    }
    return totalitem;
   }
    const contextValue={all_product,cartitem,addtocart,removefromcart,gettotalcart,gettotalcartitems};
   
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;