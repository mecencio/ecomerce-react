import { useEffect, useState } from "react";

import Filters from "./Filters";
import Item from "./Item";

function ItemList(props) {
    const [products, setProducts] = useState(props.products)
    const [brands, setBrands] = useState([...new Set(props.products.map(item => item.brand))]);
    const [categories, setCategories] = useState([...new Set(props.products.map(item => item.category))]);
    const [filterParamBrand, setFilterParamBrand] = useState("");
    const [filterParamCategory, setFilterParamCategory] = useState("");

    const changeFilter = param => {
        param.filter == "Category" ?
        setFilterParamCategory(param.value) :
        setFilterParamBrand(param.value);
    };

    const handleChangeBrand = (event) => {
        event.target.checked ? 
            changeFilter({filter:"Brand", value:event.target.value}) :
            changeFilter({filter:"Brand", value:""});
    };

    const handleChangeCategory = (event) => {
        event.target.checked ? 
            changeFilter({filter:"Category", value:event.target.value}) :
            changeFilter({filter:"Category", value:""});
    };

    useEffect(() => {
        if(filterParamBrand) {
            setProducts(products.filter(item => item.brand === filterParamBrand));
        } else if (filterParamCategory) {
            setProducts(props.products.filter(item => item.category === filterParamCategory));
        } else {
            setProducts(props.products);
        }
    }, [filterParamBrand]);

    useEffect(() => {
        if(filterParamCategory) {
            setProducts(products.filter(item => item.category === filterParamCategory));
        } else if (filterParamBrand) {
            setProducts(props.products.filter(item => item.brand === filterParamBrand));
        } else {
            setProducts(props.products);
        }
    }, [filterParamCategory])

    useEffect (() => {
        setBrands([...new Set(products.map(item => item.brand))]);
        setCategories([...new Set(products.map(item => item.category))]);
    }, [products]);

    const prod1 = props.products.slice(0, 5);
    const prod2 = props.products.slice(5, 10);
    const prod3 = props.products.slice(10, 15);
    return (
        <div className="container-fluid d-flex">
            <div className="w-25 ">
                <div className="container card border border-0">
                    <Filters title={"Categorias"} content={categories} filterFunction={handleChangeCategory} actualFilter={[filterParamBrand, filterParamCategory]} />
                    <Filters title={"Marcas"} content={brands} filterFunction={handleChangeBrand} actualFilter={[filterParamBrand, filterParamCategory]} />
                </div>
            </div>
            <div className="w-75 row justify-content-around gap-4">
                {products.map(item => <Item product={item} key={item.id}></Item>)}
            </div>
        </div>
    );
}

export default ItemList;