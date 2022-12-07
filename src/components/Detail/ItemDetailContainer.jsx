import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBase } from "../../utils/fetchBase";
import Spinner from "../General/Spinner";
import Breadcrumb from "./Breadcrumb";
import ItemDetail from "./ItemDetail";
import ItemList from "../ItemList/ItemList"

function ItemDetailContainer (props) {
    const [product, setProduct] = useState({});
    const [newArrayProd, setNewArrayProd] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        fetchBase(props.item)
        .then(result => {
            setProduct(id ? result.filter(item => item.id === parseInt(id))[0] : result); 
            setNewArrayProd(id ? result.filter(item => item.id !== parseInt(id)) : result)
            setLoading(false);
        })
    }, [id]);

    return(
        <div>
            { 
                loading? 
                    <Spinner />
                :
                <div className="container my-3">
                    <Breadcrumb item={product} />
                    <ItemDetail item={product} />
                    <div className="my-5">
                        <h1 className="text-center pb-3">Otros artículos que te podrían interesar</h1>
                        <ItemList title={"Otros productos que podrían interesarte"} products={newArrayProd} />
                    </div>
                </div>
            }
        </div>
    );
}

export default ItemDetailContainer;