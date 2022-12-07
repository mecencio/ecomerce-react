import { fetchBase } from "../../utils/fetchBase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../General/Spinner";
import ItemList from "../ItemList/ItemList";

function ItemListContainer (props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category, brand} = useParams();

    useEffect(() => {
        setLoading(true);
        fetchBase(props.products)
        .then(result => {
            brand ? setProducts(result.filter(item => item.brand === brand)) :
            setProducts(category? result.filter(item => item.category === category) : result); 
            setLoading(false);
        })
    }, [category]);

    return(
        <div className="container-fluid my-5">
            <h1 className="text-center pb-3">{props.title}</h1>
            { loading ? <Spinner/> : <ItemList products = {products}/> }
        </div>
    );
}

export default ItemListContainer;