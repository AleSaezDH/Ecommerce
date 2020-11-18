import React, { useContext, useEffect, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider ({children, defaultCartValue}) {
    const [cartItems, setCartItems] = useState(defaultCartValue);

    function add (itemAdd) {
        let findItem = cartItems.find(item => item.itemInformation.id == itemAdd.itemInformation.id);

        if (findItem) {
            let newQuantity = findItem.quantity + itemAdd.quantity;
            let indice = cartItems.indexOf(findItem);
            let newCart = [...cartItems];
            newCart[indice].quantity = newQuantity;
            setCartItems(newCart);
        } else {
            let todosLosProductos = [itemAdd, ...cartItems];
            setCartItems(todosLosProductos);
        }
    }

    function remove (itemRemove) {
        let findItem = cartItems.find(item => item.itemInformation.id == itemRemove.itemInformation.id);
        let newCart = [...cartItems];
        if (findItem) {
            let newQuantity = findItem.quantity - 1;
            if (newQuantity == 0) {
                let todos = newCart.filter(item => item.itemInformation.id != findItem.itemInformation.id);
                setCartItems(todos);
            } else {
                let indice = newCart.indexOf(findItem);
                newCart[indice].quantity = newQuantity;
                setCartItems(newCart);
            }
        }
    }

    function empty () {
        setCartItems([]);
    }

    return <CartContext.Provider value={{cartItems, add, remove, empty}}>
            {children}
        </CartContext.Provider>
}