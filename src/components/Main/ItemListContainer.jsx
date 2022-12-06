import ItemList from "./ItemList";

function ItemListContainer (props) {
    return(
        <div className="container-fluid my-5">
            <h1 className="text-center pb-3">{props.title}</h1>
            <ItemList products = {props.products}/>
        </div>
    );
}

export default ItemListContainer;