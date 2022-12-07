import { NavLink } from "react-router-dom";

function Error404() {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-12 alert alert-danger">
                    <h1>Ooops.... Error 404</h1>
                    <p>La página que intenta ver no se encuentra.</p>
                    <p>disculpe las molestias.</p>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <NavLink to="/" className="btn btn-outline-secondary ">Regresar</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Error404;