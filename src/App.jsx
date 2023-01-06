import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Context/CartContext";
import Checkout from "./components/Cart/Checkout";
import Error404 from "./components/General/Error404";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Login from "./components/Auth/Login";
import Main from "./components/Main/Main";
import NavBar from "./components/Header/NavBar";
import { arr_prod } from "./utils/products";

function App () {
    return (
        <CartProvider>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Routes>
                        <Route exact path={"/"} element={<Main />} />
                        <Route exact path={"/brand"} element={<ItemListContainer />} />
                        <Route exact path={"/brand/:brand"} element={<ItemListContainer />} />
                        <Route exact path={"/category"} element={<ItemListContainer />} />
                        <Route exact path={"/category/:category"} element={<ItemListContainer />} />
                        <Route exact path={"/search/:search"} element={<ItemListContainer title="Resultado de la búsqueda"/>} />
                        <Route exact path={"/item/:id"} element={<ItemDetailContainer/>} />
                        <Route exact path={"/cart"} element={<Cart />} />
                        <Route exact path={"/checkout"} element={<Checkout />} />
                        <Route exact path={"/login"} element={<Login />} />
                        <Route exact path={"*"} element={<Error404 />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;