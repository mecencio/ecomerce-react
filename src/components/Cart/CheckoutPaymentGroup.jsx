function CheckoutPaymentGroup() {
    return(
        <div className="card my-4 p-3">
            <h3 className="fw-light">Medio de pago</h3>
            <div className="input-group mt-3 mb-2">
                <span className="input-group-text">Número de la tarjeta</span>
                <input type="text" aria-label="Card Number" className="form-control shadow-none" />
            </div>
            <div className="input-group my-3">
                <span className="input-group-text">Mes Venc.</span>
                <input type="text" aria-label="Email" className="form-control shadow-none" />
                <span className="input-group-text">Año Venc.</span>
                <input type="text" aria-label="Email" className="form-control shadow-none" />
                <span className="input-group-text">Cod. Seg.</span>
                <input type="password" aria-label="Email" className="form-control shadow-none" />
            </div>
            <div className="input-group mt-2 mb-3">
                <span className="input-group-text">Nombre titular</span>
                <input type="text" aria-label="Email" className="form-control shadow-none" />
                <span className="input-group-text">DNI titular</span>
                <input type="text" aria-label="Email" className="form-control shadow-none" />
            </div>
        </div>
    )
}

export default CheckoutPaymentGroup;