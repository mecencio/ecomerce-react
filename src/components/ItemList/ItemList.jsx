import Item from "./Item";

function ItemList(props) {
    const prod1 = props.products.slice(0, 5);
    const prod2 = props.products.slice(5, 10);
    const prod3 = props.products.slice(10, 15);
    return (
        <div className="container-fluid d-flex">
            <div className="w-25">hola</div>
            <div className="w-75 row justify-content-around gap-4">
                {props.products.map(item => <Item product={item} key={item.id}></Item>)}
            </div>
        </div>
    );
}

export default ItemList;