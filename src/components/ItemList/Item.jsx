import { NavLink } from "react-router-dom";

function Item(props) {
    return (
        <div className="card text-center" style={{width: "15rem"}} key={props.product.id}>
            <img src={"../"+props.product.image} className="card-img-top" alt={props.product.name} />
            <div className="card-body d-flex flex-column">
                <p className="card-text fs-6">{props.product.name}</p>
                <p className="card-text mt-auto fw-bold">$ {props.product.price}</p>
                <NavLink to={`/item/${props.product.id}`} className="btn btn-success">Ver mas</NavLink>
            </div>
        </div>
    );
}

export default Item;