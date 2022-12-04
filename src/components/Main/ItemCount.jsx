import { useEffect, useState } from "react";

function ItemCount (props) {
    const [cant, setCant] = useState(1);
    const [id, setId] = useState(1);

    return (
        <div className="btn-group w-75 mx-auto my-2" role="group">
            <input type="checkbox" className="btn-check" id={"btncheck"+id} onClick={() => {if(cant > 1) {setCant(cant -1)};}} />
            <label className="btn btn-outline-success fw-bold" htmlFor="btncheck1">-</label>

            <input type="checkbox" className="btn-check" id="btncheck2" />
            <label className="btn btn-outline-success fw-bold" htmlFor="btncheck2">{cant}</label>

            <input type="checkbox" className="btn-check" id="btncheck3" onClick={() => {if(cant < props.stock) {setCant(cant +1)};}} />
            <label className="btn btn-outline-success fw-bold" htmlFor="btncheck3">+</label>
        </div>
    )
}

export default ItemCount;