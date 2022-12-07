import ItemCount from "../ItemList/ItemCount"

function ItemDetail(props) {
    const item = props.item;

    return (
        <div className="row card p-3">
            <h4 className="w-100 my-2 fw-semibold">{item.name}</h4>
            <div className="d-flex border-1 border-bottom">
                <div className="d-flex col-8">
                    <img src={"../"+item.image} alt={item.name} className="p-3 border border-0 w-75"/>
                </div>
                <div className="col-4">
                    <h5 className="text-success text-center my-3 fs-2">$ {item.price}</h5>
                    <p className="p-3 mt-3 mb-0 border-2 border-success border-bottom border-opacity-50">Marca: {item.brand}</p>
                    <p className="p-3 mb-0 border-2 border-success border-bottom border-opacity-50">Categoria: {item.category}</p>
                    <div className="d-flex align-items-center px-3 py-2 mb-0 border-2 border-success border-bottom border-opacity-50 ">
                        <img src="../images/truck.svg" alt="truck" style={{width:"8%"}}/>
                        <p className="m-3">Envío a todo el país.</p>
                    </div>
                    <div className="d-flex align-items-center px-3 py-2 py-3 border-2 border-success border-bottom border-opacity-50 ">
                        <img src="../images/shield-check.svg" alt="truck" style={{width:"8%"}}/>
                        <div>
                            <p className="mx-3 my-0">Devolución gratis.</p>
                            <p className="mx-3 my-0 fw-light" style={{fontSize:"12px"}}>Durante 30 días a partir del día que lo recibis</p>
                        </div>
                    </div>

                    <div className="mt-5 d-flex flex-column w-50 mx-auto">
                        <ItemCount id={item.id} stock={item.stock} />
                        <a href="" className="btn btn-outline-success">Agregar al carrito</a>
                    </div>
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