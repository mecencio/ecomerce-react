import Item from "./Item";

function ItemList(props) {
    return (
        <div className="d-flex flex-row gap-4 justify-content-center">
            {props.products.map(item => <Item product={item} key={item.id} />)}
        </div>
    );
}

export default ItemList;