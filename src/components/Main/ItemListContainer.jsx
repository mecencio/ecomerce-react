import React, { Component } from "react";

class Card extends Component {
    render() {
        const output = this.props.datos.map(
            item => <div className="card text-center" style={{width: "15rem"}} key={item.id}>
                        <img src={item.img} className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column">
                            <p className="card-text fs-6">{item.nombre}</p>
                            <p className="card-text mt-auto fw-bold">$ {item.precio}</p>
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
}

class ItemListContainer extends Component {
    render() {
        return(
            <div className="container-fluid my-5">
                <h1 className="text-center pb-3">{this.props.greeting}</h1>
                <Card datos = {this.props.prod}/>
            </div>
        );
    }
}

export default ItemListContainer;