import React, { Component } from "react";
import Slide from "./MainSlide"
import ItemListContainer from "./ItemListContainer";

function Main () {
    const arr_prod = [
        {id: 1, nombre:"Placa de Video AMD RADEON Asus RX 6900 XT TUF GAMING OC 16GB GDDR6", img:"images/AMD RADEON Asus RX 6900 XT.jpg", precio:"260.684,97"},
        {id: 2, nombre:"Placa de Video AMD Radeon PowerColor Rx 6600 Fighter 8GB GDDR6", img:"images/AMD Radeon PowerColor Rx 6600 Fighter.jpg", precio:"99.914,10"},
        {id: 3, nombre:"Memoria Ram Corsair Vengeance LPX Black 8GB 3000 Mhz DDR4", img:"images/Corsair Vengeance LPX Black 8GB.jpg", precio:"11.796"},
        {id: 4, nombre:"Micro AMD Ryzen 3 4100 4.0 Ghz AM4", img:"images/Micro AMD Ryzen 3 4100 4.0 Ghz AM4.jpg", precio:"29.463,12"},
        {id: 5, nombre:"Micro Intel Celeron G6900 Alderlake 3.4Ghz 4Mb S.1700", img:"images/Micro Intel Celeron G6900.jpg", precio:"14.327,27"}
    ]

    return (
        <div>
            <Slide></Slide>
            <ItemListContainer greeting={"Productos disponibles"} prod={arr_prod}/>
        </div>
    )
}

export default Main;