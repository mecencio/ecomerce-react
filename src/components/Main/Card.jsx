import ItemCount from "./ItemCount";

function Card (props) {

    const output = props.datos.map(
        item => <div className="card text-center" style={{width: "15rem"}} key={item.id}>
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <p className="card-text fs-6">{item.nombre}</p>
                        <p className="card-text mt-auto fw-bold">$ {item.precio}</p>
                        <ItemCount stock={item.stock} />
                        <a href="#" className="btn btn-success">Agregar al carrito</a>
                    </div>
                </div>
    );

    return(
        <div className="d-flex flex-row gap-4 justify-content-center">
            {output}
        </div>
    );
}

export default Card;