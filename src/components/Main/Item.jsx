import ItemCount from "./ItemCount";

function Item(props) {
    return (
        <div className="card text-center" style={{width: "15rem"}} key={props.product.id}>
            <img src={props.product.image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <p className="card-text fs-6">{props.product.name}</p>
                <p className="card-text mt-auto fw-bold">$ {props.product.price}</p>
                <ItemCount id={props.product.id} stock={props.product.stock} />
                <a href="/" className="btn btn-success">Agregar al carrito</a>
            </div>
        </div>
    );
}

export default Item;