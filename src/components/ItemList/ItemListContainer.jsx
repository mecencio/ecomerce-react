import { collection, getDocs, getFirestore, limit, orderBy, query, where } from "firebase/firestore"
import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import Spinner from "../General/Spinner";
import { arr_prod } from "../../utils/products";
import { fetchBase } from "../../utils/fetchBase";
import { useParams } from "react-router-dom";

function ItemListContainer (props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category, brand, search} = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        if ((category || brand || search)?true:false) {
            if (category) {
                setProducts(arr_prod.filter(item => item.category === category));
            } else if (search) {
                setProducts(arr_prod.filter(item => item.name.toLowerCase().includes(search)));
            } else {
                setProducts(arr_prod.filter(item => item.brand === brand));
            }
        } else {
            setProducts(arr_prod);
        }
        setLoading(false);
        }, 2000);
    }, [category,brand,search]);

    // useEffect(() => {
    //     setLoading(true);
    //     const db = getFirestore();
    //     const productsCollection = collection (db, "products");
    //     let q;
    //     if ((category || brand || search)?true:false) {
    //         if (category) {
    //             q = query(productsCollection, where("category", "==", category));
    //         } else if (search) {
    //             q = query(productsCollection, where("name", ">=", search), where("name", "<=", search+ '\uf8ff'));
    //         } else {
    //             q = query(productsCollection, where("brand", "==", brand));
    //         }
    //     } else {
    //         q = query(productsCollection, orderBy("stock", "desc"), limit(15));
    //     }
    //     getDocs(q).then((data) => {
    //         setProducts(data.docs.map((item) => ({id:item.id, ...item.data()})))
    //         setLoading(false);
    //     })
    // }, [category, brand, search]);

    return(
        <div className="container-fluid my-5">
            <h1 className="text-center pb-3">{props.title}</h1>
            { loading ? <Spinner/> : <ItemList products = {products}/> }
        </div>
    );
}

export default ItemListContainer;