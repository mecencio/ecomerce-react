import Slide from "./MainSlide"
import { arr_prod } from "../../utils/products";
import ItemListContainer from "../ItemList/ItemListContainer";


function Main () {

    return (
        <div>
            <Slide></Slide>
            <ItemListContainer title={"Productos disponibles"} products={arr_prod}/>
        </div>
    )
}

export default Main;