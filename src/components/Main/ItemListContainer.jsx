import React, { Component } from "react";
import Card from "./Card";

function ItemListContainer (props) {
    return(
        <div className="container-fluid my-5">
            <h1 className="text-center pb-3">{props.greeting}</h1>
            <Card datos = {props.prod}/>
        </div>
    );
}

export default ItemListContainer;