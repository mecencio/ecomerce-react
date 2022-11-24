import React, { Component } from "react";
import List from "./List";

function FooterContent () {
    let array_links =[
        {id:1 ,nombre:"Inicio", link:"#"},
        {id:2 ,nombre:"Quienes Somos", link:"#"},
        {id:3 ,nombre:"Contáctenos", link:"#"},
    ];

    let array_categories = [
        {id:4 ,nombre:"Placas de videos", link:"#"},
        {id:5 ,nombre:"Procesadores", link:"#"},
        {id:6 ,nombre:"Memorias", link:"#"},
        {id:7 ,nombre:"Almacenamiento", link:"#"},
        {id:8 ,nombre:"Todas las categorias", link:"#"},
    ];

    let array_marcas =[
        {id:9 ,nombre:"Intel", link:"#"},
        {id:10 ,nombre:"AMD", link:"#"},
        {id:11 ,nombre:"Asus", link:"#"},
        {id:12 ,nombre:"Nvidia", link:"#"},
        {id:13 ,nombre:"Msi", link:"#"},
    ];

    let array_ayuda =[
        {id:14 ,nombre:"FAQ", link:"#"},
        {id:15 ,nombre:"Politica de privacidad", link:"#"},
        {id:16 ,nombre:"Botón de arrepentimiento", link:"#"},
    ];

    return(
        <div className="container-fluid py-4 py-md-5 px-4 px-md-3">
            <div className="row">
                <div className="col-lg-2 mb-3 text-center">
                    <span className="py-4 ms-lg-3 ms-xxl-5 text-success fw-bold fst-italic font-monospace text-uppercase" href="#">G a m e </span>
                    <span className="py-4 text-nowrap text-success fw-bold fst-italic font-monospace text-uppercase" href="#"> O v e r</span>
                </div>
                <List titulo={"Links"} categorias={array_links} />
                <List titulo={"Categoria"} categorias={array_categories} />
                <List titulo={"Marcas"} categorias={array_marcas} />
                <List titulo={"Marcas"} categorias={array_marcas} />
                <List titulo={"Ayuda"} categorias={array_ayuda} />
            </div>
        </div>
    );
}

export default FooterContent;