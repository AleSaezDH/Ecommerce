import React, { useContext, useEffect, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider ({children, defaultCartValue}) {
    const [cartItems, setCartItems] = useState(defaultCartValue);

    function add (itemAdd) {
        let findItem = []
        findItem = cartItems.find(item => item.itemInformation.id == itemAdd.itemInformation.id);

        if (findItem) {
            let newQuantity = findItem.quantity + itemAdd.quantity;
            let indice = cartItems.indexOf(findItem);
            cartItems[indice].quantity = newQuantity;
            setCartItems(cartItems);
        } else {
            let todosLosProductos = [itemAdd, ...cartItems];
            setCartItems(todosLosProductos);
        }
    }

    function remove (itemRemove) {
        let findItem = []
        findItem = cartItems.find(item => item.itemInformation.id == itemRemove.itemInformation.id);
        if (findItem) {
            let newQuantity = findItem.quantity - 1;
            if (newQuantity == 0) {
                let todos = [];
                todos = cartItems.filter(item => item.itemInformation.id != findItem.itemInformation.id);
                setCartItems(todos);
            } else {
                let indice = cartItems.indexOf(findItem);
                cartItems[indice].quantity = newQuantity;
                setCartItems(cartItems);
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