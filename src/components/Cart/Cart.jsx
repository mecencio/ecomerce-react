import { useContext, useEffect, useState } from "react";

import { CartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";
import { NavLink } from "react-router-dom";

function Cart() {
    const {cart, total, cartSize, getTotal, setTotal } = useContext(CartContext)
    const [classes, setClasses] = useState("btn btn-outline-success w-50 my-3");
    const options = { style: 'currency', currency: 'ARS' };
    const numberFormat = new Intl.NumberFormat('es-AR', options);

    useEffect(() => {
        setTotal(getTotal());
        if (cartSize) 
            setClasses("btn btn-outline-success w-50 my-3 mx-auto")
        else
            setClasses("btn btn-outline-success w-50 my-3 mx-auto disabled")
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
                    cart.map(item => <ItemCart product={item} key={item.id}/>)
                }
                {/* items */}
            </div>
            <div className="d-flex flex-column justify-content-center shadow rounded my-3 mx-5 p-3 bg-body w-25 text-center" style={{maxHeight:"232px"}}>
                <h2>Resumen del pedido</h2>
                <div>
                    <p className="px-1 fs-5 fw-semibold">Total: </p>
                    <p className="px-1 fs-5">{total}</p>
                </div>
                <NavLink to="/checkout" type="button" className={classes} id="resumeButton">Continuar</NavLink>
            </div>
        </div>
    )
}

export default Cart;