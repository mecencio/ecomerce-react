function CheckoutContactGroup() {
    return(
        <div className="card my-4 p-3">
            <h3 className="fw-light">Datos de contacto</h3>
            <div className="input-group mt-3 mb-2">
                <span className="input-group-text">Cod. Area</span>
                <input type="text" aria-label="Code" className="form-control shadow-none" />
                <span className="input-group-text">Telefono</span>
                <input type="text" aria-label="Phone" className="form-control shadow-none" />
            </div>
            <div className="input-group mt-2 mb-3">
                <span className="input-group-text">Email</span>
                <input type="mail" aria-label="Email" className="form-control shadow-none" required />
            </div>
        </div>
    )
}

export default CheckoutContactGroup;