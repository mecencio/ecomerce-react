import { NavLink } from "react-router-dom";

function Breadcrumb(props) {

    return (
        <nav style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to="/" className="text-decoration-none text-success">Inicio</NavLink></li>
                <li className="breadcrumb-item" aria-current="page"><NavLink to={"/category/" + props.item.category} className="text-decoration-none text-success">{props.item.category}</NavLink></li>
                <li className="breadcrumb-item" aria-current="page"><NavLink to={"/brand/" + props.item.brand} className="text-decoration-none text-success">{props.item.brand}</NavLink></li>
                <li className="breadcrumb-item active" aria-current="page">{props.item.name}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;