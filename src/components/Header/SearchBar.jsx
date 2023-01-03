import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { arr_prod } from "../../utils/products";

function SearchBar () {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value.toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/search/"+searchTerm)
    }

    useEffect(() => {
        setSearchResult(
            arr_prod.filter(item => item.name.toLowerCase().includes(searchTerm))
        );
    }, [searchTerm])

    return (
        <form className="d-flex col-4" role="search" onSubmit={handleSubmit}>
            <input onChange={handleChange} name="searchInput" className="form-control me-2" placeholder="Buscar..." aria-label="Buscar"/>
            <NavLink to={"/search/"+searchTerm} className="btn btn-outline-success">Buscar</NavLink>
        </form>
    )
}

export default SearchBar;