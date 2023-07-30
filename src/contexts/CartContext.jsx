import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props){
    //global state
    const [cart, setCart] = useState([]);

    //initial state from localstorage - when page loads
    useEffect(
        ()=>{
            //local storage
            const storedCart = localStorage.getItem('cartList')
            //check if something is in local storage (cart)
            if (storedCart){
                setCart(JSON.parse(storedCart))
            }
        }, []
     )

     useEffect(
        ()=>{
            console.log('update, cart is', cart)
            localStorage.setItem('cartList', JSON.stringify(cart))

        }, [cart]
    )

    const addCart = (cartToAdd) =>{
        console.log('adding', cartToAdd)
        let newCart = [...cart, cartToAdd]
        setCart(newCart)
        localStorage.setItem('cartList', JSON.stringify(newCart))
    }

    const removeCart = (cartToRemove) =>{
        console.log('removeee', cartToRemove)
        let newCart = cart.filter(item => item !== cartToRemove)
        setCart(newCart)
        localStorage.setItem('cartList', JSON.stringify(newCart))
    }

    return(
    <CartContext.Provider value={{ cart, addCart, removeCart }} >
        {props.children}
    </CartContext.Provider>
    )

}