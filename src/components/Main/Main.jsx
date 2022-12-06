import Slide from "./MainSlide"
import ItemListContainer from "./ItemListContainer";
import { fetchBase } from "../../utils/fetchBase";
import { arr_prod } from "../../utils/products";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";

function Main () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBase(arr_prod)
        .then(result => {
            setProducts(result); 
            setLoading(false);
        })
    }, []);

    return (
        <div>
            <Slide></Slide>
            { 
            loading? 
                <Spinner />
            :
                <ItemListContainer title={"Productos disponibles"} products={products}/>
            }
        </div>
    )
}

export default Main;