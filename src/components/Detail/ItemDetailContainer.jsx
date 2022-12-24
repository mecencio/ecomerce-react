import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBase } from "../../utils/fetchBase";
import Spinner from "../General/Spinner";
import Breadcrumb from "./Breadcrumb";
import ItemDetail from "./ItemDetail";
import ItemList from "../ItemList/ItemList"
import { getFirestore, getDoc, doc } from "firebase/firestore"

function ItemDetailContainer (props) {
    const [product, setProduct] = useState({});
    const [newArrayProd, setNewArrayProd] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        getDoc(doc(db, "products", id)).then((snap)=> {
            setProduct({id:snap.id, ...snap.data()})
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