import { NavLink, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react";

import Breadcrumb from "./Breadcrumb";
import ItemDetail from "./ItemDetail";
import ItemList from "../ItemList/ItemList"
import Spinner from "../General/Spinner";
import {arr_prod} from '../../utils/products'

function ItemDetailContainer () {
    const [product, setProduct] = useState({});
    const [newArrayProd, setNewArrayProd] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            console.log(arr_prod.filter(item => item.id == id))
            setProduct(...arr_prod.filter(item => item.id == id));
            setLoading(false);
        }, 2000);
    }, [id])

    // useEffect(() => {
    //     setLoading(true);
    //     const db = getFirestore();

    //     getDoc(doc(db, "products", id)).then((snap)=> {
    //         setProduct({id:snap.id, ...snap.data()})
    //         setLoading(false);
    //     })
    // }, [id]);

    return(
        <div>
            { 
                loading? 
                    <Spinner />
                : !product ? 
                <div className="container my-3">
                    <div className="alert alert-danger text-center mt-3">
                        <p>Lo sentimos, el producto ingresado no existe.</p>
                        <NavLink to="/" type="button" className="btn btn-secondary w-50 py-1">Volver</NavLink>
                    </div>
                </div>
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