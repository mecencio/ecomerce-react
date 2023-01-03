import FilterItem from "./FilterItem";
import { useState } from "react";

function Filters(props) {
    return (
            <ul className="list-group list-group-flush p-3 ms-5">
                <h5 className="fw-semibold">{props.title}</h5>
                { props.content.map( (item, index) => <FilterItem item={item} key={index} function={props.filterFunction} checked={props.actualFilter.includes(item)}></FilterItem>)}
            </ul>
    )
}

export default Filters;