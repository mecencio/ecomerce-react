function ItemCount (props) {

    return (
        <div className="btn-group btn-group-sm my-3" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-success fw-bold" onClick={props.onSub}>-</button>
            <button type="button" className="btn btn-outline-success fw-bold" >{props.count}</button>
            <button type="button" className="btn btn-outline-success fw-bold" onClick={props.onAdd}>+</button>
        </div>
    )
}

export default ItemCount;