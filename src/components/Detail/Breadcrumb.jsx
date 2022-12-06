function Breadcrumb(props) {

    return (
        <nav style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Inicio</li>
                <li className="breadcrumb-item" aria-current="page">{props.item.category}</li>
                <li className="breadcrumb-item active" aria-current="page">{props.item.name}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;