import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import { arr_prod } from "./utils/products";

function App () {
    return (
        <div>
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;