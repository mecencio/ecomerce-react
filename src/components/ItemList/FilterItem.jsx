import { useEffect, useState } from "react";

function FilterItem (props) {

    useEffect(() => {
        if(props.checked) {
            document.getElementById(props.item).checked = true;
        }
    },[props])


    return (
        <li className="list-group-item border border-0"  onChange={props.function}>
            <input className="form-check-input me-1" value={props.item} type="checkbox" id={props.item}/>
            <label className="form-check-label" htmlFor="firstCheckbox">{props.item}</label>
        </li>
    )
}

export default FilterItem;