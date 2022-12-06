import { useEffect, useState } from "react";
import { fetchBase } from "../../utils/fetchBase";
import Spinner from "../Main/Spinner";
import Breadcrumb from "./Breadcrumb";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer (props) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBase(props.item)
        .then(result => {
            setProduct(result); 
            setLoading(false);
        })
    }, []);

    return(
        <div className="container my-3">
            { 
                loading? 
                    <Spinner />
                :
                    <Breadcrumb item={product} />
            }
            {!loading && <ItemDetail item={product} />}
        </div>
    );
}

export default ItemDetailContainer;