import { useContext, useEffect, useState } from "react";

import { CartContext } from "../Context/CartContext";
import CheckoutContactGroup from "./CheckoutContactGroup";
import CheckoutPaymentGroup from "./CheckoutPaymentGroup";
import CheckoutShipGroup from "./CheckoutShipGroup";

function Checkout () {
    const { getTotal, cartSize } = useContext(CartContext);
    const [hasItem, setHasItem] = useState(false);

    useEffect(() => {
        if (cartSize) 
            document.getElementById("resumeButton").removeAttribute("disabled");
        else
            document.getElementById("resumeButton").setAttribute("disabled","");
    }, [cartSize])

    return (
        <form action="" className="d-flex flex-row">
            <div className="shadow rounded my-3 mx-5 p-3 bg-body w-75">
                <h2>Checkout</h2>
                <CheckoutShipGroup></CheckoutShipGroup>
                <CheckoutContactGroup></CheckoutContactGroup>
                <CheckoutPaymentGroup></CheckoutPaymentGroup>
            </div>
            <div className="shadow rounded my-3 mx-5 p-3 bg-body w-25 text-center" style={{maxHeight:"232px"}}>
                <h2>Resumen del pedido</h2>
                <div className="d-flex justify-content-center">
                    <p className="px-1 fs-5 fw-semibold">Total: </p>
                    <p className="px-1 fs-5">{getTotal()}</p>
                </div>
                <button type="button" className="btn btn-outline-success w-50 my-3" id="resumeButton">Realizar compra</button>
            </div>
        </form>
    )
}

export default Checkout;