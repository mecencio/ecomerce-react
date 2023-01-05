import ItemCarouselContainer from "../ItemList/ItemCarouselContainer";
import Slide from "./MainSlide"
import { arr_prod } from "../../utils/products";

function Main () {

    return (
        <div>
            <Slide></Slide>
            <ItemCarouselContainer title={"Productos disponibles"} products={arr_prod}/>
        </div>
    )
}

export default Main;