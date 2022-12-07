import SearchBar from "./SearchBar";
import User from "./User";
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";
import { categories } from "../../utils/categories";

function NavBar () {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid mx-5">
                <NavLink to="/" className="navbar-brand ms-5 text-success fw-bold fst-italic font-monospace text-uppercase" >G a m e &nbsp; O v e r</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-between" id="navbar">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-4">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link my-1 active" aria-current="page">Inicio</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link my-1 dropdown-toggle text-decoration-none active" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor: "pointer",}}>
                                Categorias
                            </p>
                            <ul className="dropdown-menu">
                                {categories.map(item => 
                                <li key={item}><NavLink to={`/category/${item}`} className="dropdown-item" >{item}</NavLink></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                    <SearchBar />
                    <div className="d-flex me-4 my-1">
                        <User />
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;