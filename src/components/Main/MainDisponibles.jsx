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

class MainDisponibles extends Component {
    render() {
        const arr_prod = [
            {id: 1, nombre:"Placa de Video AMD RADEON Asus RX 6900 XT TUF GAMING OC 16GB GDDR6", img:"images/AMD RADEON Asus RX 6900 XT.jpg", precio:"260.684,97"},
            {id: 2, nombre:"Placa de Video AMD Radeon PowerColor Rx 6600 Fighter 8GB GDDR6", img:"images/AMD Radeon PowerColor Rx 6600 Fighter.jpg", precio:"99.914,10"},
            {id: 3, nombre:"Memoria Ram Corsair Vengeance LPX Black 8GB 3000 Mhz DDR4", img:"images/Corsair Vengeance LPX Black 8GB.jpg", precio:"11.796"},
            {id: 4, nombre:"Micro AMD Ryzen 3 4100 4.0 Ghz AM4", img:"images/Micro AMD Ryzen 3 4100 4.0 Ghz AM4.jpg", precio:"29.463,12"},
            {id: 5, nombre:"Micro Intel Celeron G6900 Alderlake 3.4Ghz 4Mb S.1700", img:"images/Micro Intel Celeron G6900.jpg", precio:"14.327,27"}
        ]

        return(
            <div className="container-fluid my-5">
                <h1 className="text-center pb-3">Productos disponibles</h1>
                <Card datos = {arr_prod}/>
            </div>
        );
    }
}

export default MainDisponibles;