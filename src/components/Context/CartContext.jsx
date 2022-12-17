import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    function addToCart (product) {
        if (getItem(product.id) === undefined) {
            setCart([...cart, product])
            return true
        } else {
            return updateQuantity(product);
        }
    }

    function updateQuantity (product) {
        const item = getItem(product.id);
        if ((item.stock >= (item.quantity + product.quantity))) {
            removeItem(item.id);
            item.quantity += product.quantity;
            setCart([...cart, item]);
            return true;
        } else return false;
    }

    function removeItem (id) {
        const index = cart.findIndex(item => item.id === id);
        if (index >= 0) {
            cart.splice(index, 1);
            setCart([...cart]);
            return true;
        } else return false;
    }

    function clear () {
        setCart([]);
    }

    function increase(id) {
        const item = getItem(id);
        if (item.quantity < item.stock) {
            item.quantity++;
        }
    }

    function decrease(id) {
        const item = getItem(id);
        item.quantity--;
        if (item.quantity <= 0) {
            removeItem(id);
        }
    }

    function getItem(id) {
        return cart.find(item => item.id === id)
    }

    function getTotal() {
        let result = cart.reduce(function (sum, item) {return sum + (item.quantity * item.price)}, 0);
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(result);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem, cartSize:cart.length, increase, decrease, clear, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;