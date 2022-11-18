import React, { Component } from "react";
import SearchBar from "./SearchBar";
import User from "./User";
import CartWidget from "./CartWidget"

class NavBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5 text-success fw-bold fst-italic font-monospace text-uppercase" href="#">G a m e &nbsp; O v e r</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-between" id="navbar">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-4">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-decoration-none active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Procesadores</a></li>
                                    <li><a className="dropdown-item" href="#">Placas de video</a></li>
                                    <li><a className="dropdown-item" href="#">Memorias RAM</a></li>
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
}

export default NavBar;