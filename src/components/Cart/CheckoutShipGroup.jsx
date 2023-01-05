function CheckoutShipGroup() {
    return(
        <div className="card my-4 p-3">
            <h3 className="fw-light">Datos de envio</h3>
            <div className="input-group mt-3 mb-2">
                <span className="input-group-text">Nombre</span>
                <input type="text" aria-label="First name" className="form-control shadow-none" />
                <span className="input-group-text">Apellido</span>
                <input type="text" aria-label="Last name" className="form-control shadow-none" />
                <span className="input-group-text">DNI</span>
                <input type="text" aria-label="id number" className="form-control shadow-none" />
            </div>
            <div className="input-group my-2">
                <span className="input-group-text">Calle</span>
                <input type="text" aria-label="street" className="form-control shadow-none" />
                <span className="input-group-text">Nro</span>
                <input type="text" aria-label="number" className="form-control shadow-none" />
                <span className="input-group-text">Piso</span>
                <input type="text" aria-label="Flat" className="form-control shadow-none" />
                <span className="input-group-text">Dpto</span>
                <input type="text" aria-label="Department" className="form-control shadow-none" />
            </div>
            <div className="input-group mt-2 mb-3">
                <span className="input-group-text">Ciudad</span>
                <input type="text" aria-label="City" className="form-control shadow-none" />
                <span className="input-group-text">Provincia</span>
                <input type="text" aria-label="Province" className="form-control shadow-none" />
            </div>
        </div>
    )
}

export default CheckoutShipGroup;