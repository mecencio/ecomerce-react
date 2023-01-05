import { useContext, useEffect, useState } from "react";

import { CartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";
import { NavLink } from "react-router-dom";

function Cart() {
    const {cart, getTotal, cartSize} = useContext(CartContext)
    const [classes, setClasses] = useState("btn btn-outline-success w-50 my-3");

    useEffect(() => {
        if (cartSize) 
            setClasses("btn btn-outline-success w-50 my-3")
        else
            setClasses("btn btn-outline-success w-50 my-3 disabled")
    }, [cartSize])

    return (
        <div className="d-flex flex-row">
            <div className="shadow rounded my-3 mx-5 p-3 bg-body w-75">
                <h2>Resumen</h2>
                {cartSize === 0 ? 
                            <div className="alert alert-danger text-center mt-3">
                                <p>Actualmente no posee productos en el carrito.</p>
                                <NavLink to="/" type="button" className="btn btn-secondary w-50 py-1">Volver</NavLink>
                            </div>
                :
                    cart.map(item => <ItemCart product={item} key={item.id} />)
                }
                {/* items */}
            </div>
            <div className="shadow rounded my-3 mx-5 p-3 bg-body w-25 text-center" style={{maxHeight:"232px"}}>
                <h2>Resumen del pedido</h2>
                <div className="d-flex justify-content-center">
                    <p className="px-1 fs-5 fw-semibold">Total: </p>
                    <p className="px-1 fs-5">{getTotal()}</p>
                </div>
                <NavLink to="/checkout" type="button" className={classes} id="resumeButton">Continuar</NavLink>
            </div>
        </div>
    )
}

export default Cart;