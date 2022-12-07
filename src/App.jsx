import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { arr_prod } from "./utils/products";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Error404 from "./components/General/Error404";

function App () {
    return (
        <BrowserRouter>
        <div>
            <NavBar />
            <Routes>
                <Route exact path={"/"} element={<Main />} />
                <Route exact path={"/brand"} element={<ItemListContainer products={arr_prod} />} />
                <Route exact path={"/brand/:brand"} element={<ItemListContainer products={arr_prod} />} />
                <Route exact path={"/category"} element={<ItemListContainer products={arr_prod} />} />
                <Route exact path={"/category/:category"} element={<ItemListContainer products={arr_prod} />} />
                <Route exact path={"/item/:id"} element={<ItemDetailContainer item={arr_prod} />} />
                <Route exact path={"*"} element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
        </BrowserRouter>
    );
}

export default App;