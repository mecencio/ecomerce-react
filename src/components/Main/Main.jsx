import ItemListContainer from "../ItemList/ItemListContainer";
import Slide from "./MainSlide"
import { arr_prod } from "../../utils/products";

function Main () {

    return (
        <div>
            <Slide></Slide>
            <ItemListContainer title={"Productos disponibles"} products={arr_prod}/>
        </div>
    )
}

export default Main;