import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function SearchBar () {
    const [search, setSearch] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        setSearch(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase());
    }

    return (
        <form className="d-flex col-4" role="search">
            <input onChange={handleSubmit} name="searchInput" className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
            <NavLink to={"/search/"+search} className="btn btn-outline-success">Search</NavLink>
        </form>
    )
}

export default SearchBar;