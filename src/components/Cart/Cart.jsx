import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";

function Cart() {
    const {cart, getTotal, cartSize} = useContext(CartContext)

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
                <button type="button" className="btn btn-outline-success w-50 my-3">Continuar</button>
            </div>
        </div>
    )
}

export default Cart;