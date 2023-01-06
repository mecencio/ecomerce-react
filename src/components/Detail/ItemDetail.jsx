import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer, toast } from "react-toastify";
import { useContext, useState } from "react";

import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemList/ItemCount";

function ItemDetail(props) {
    const item = props.item;
    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext);

    const onSub = () => count > 1 && setCount(count - 1);
    const onAdd = () => count < item.stock && setCount(count + 1);
    const addItem = ()  => {
        item.quantity = count;
        if (addToCart(structuredClone(item))) {
            toast.success('Producto agregado correctamente', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error("No se ha podido agregar el producto. La cantidad supera nuestro stock", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div className="row card p-3">
            <h4 className="w-100 my-2 fw-semibold">{item.name}</h4>
            <div className="d-flex border-1 border-bottom">
                <div className="d-flex col-8">
                    <img src={item.image} alt={item.name} className="p-3 border border-0 w-75"/>
                </div>
                <div className="col-4">
                    <h5 className="text-success text-center my-3 fs-2">{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(item.price)}</h5>
                    <p className="p-3 mt-3 mb-0 border-2 border-success border-bottom border-opacity-50">Marca: {item.brand}</p>
                    <p className="p-3 mb-0 border-2 border-success border-bottom border-opacity-50">Categoria: {item.category}</p>
                    <div className="d-flex align-items-center px-3 py-2 mb-0 border-2 border-success border-bottom border-opacity-50 ">
                        <img src="../../images/truck.svg" alt="truck" style={{width:"8%"}}/>
                        <p className="m-3">Envío a todo el país.</p>
                    </div>
                    <div className="d-flex align-items-center px-3 py-2 py-3 border-2 border-success border-bottom border-opacity-50 ">
                        <img src="../../images/shield-check.svg" alt="truck" style={{width:"8%"}}/>
                        <div>
                            <p className="mx-3 my-0">Devolución gratis.</p>
                            <p className="mx-3 my-0 fw-light" style={{fontSize:"12px"}}>Durante 30 días a partir del día que lo recibis</p>
                        </div>
                    </div>

                    <div className="mt-5 d-flex flex-column w-50 mx-auto">
                        <ItemCount onAdd={onAdd} onSub={onSub} count={count}/>
                        <button className="btn btn-outline-success mb-4" onClick={addItem}>Agregar al carrito</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
            <div className="mt-5">
                <h5 className="fw-semibold">Descripción</h5>
                <p className="pt-3">{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail;