import { useState } from "react";

function ItemCount (props) {
    const [count, setCount] = useState(1);

    const disminuir = () => count > 1 && setCount(count - 1);
    const aumentar = () => count < props.stock && setCount(count + 1);

    return (
        <div className="btn-group btn-group-sm my-3" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-success fw-bold" onClick={() => disminuir()}>-</button>
            <button type="button" className="btn btn-outline-success fw-bold" >{count}</button>
            <button type="button" className="btn btn-outline-success fw-bold" onClick={() => aumentar()}>+</button>
        </div>
    )
}

export default ItemCount;