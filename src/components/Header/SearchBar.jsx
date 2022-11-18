import React, { Component } from "react";

class SearchBar extends Component {
    render() {
        return (
            <form className="d-flex col-4" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar;