import { ToastContainer, toast } from "react-toastify";

function Register() {
    const handlerChangeName = (event) => {
        const length = event.target.value.length >= 1;
        const result = event.target.value.replace(/[A-Z]|[a-z]/g, "") === "";
        console.log(event.target);
        if (result && length) {
            event.target.className = "form-control border border-success";
        } else if (!length) {
            event.target.className = "form-control border border-danger";
            toast.error("Campo obligatorio", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            event.target.className = "form-control border border-danger";
            toast.error("Solo puede contener letras", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div style={{
            backgroundColor: '#ffffff',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23599b68' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} className="py-5">
            <div className="border border-2 border-success rounded-3 shadow-lg p-2 mx-auto w-50" style={{backgroundColor: "rgb(243 244 246)"}}>
                <h1 className="py-3 fw-semibold text-success text-center">INGRESAR</h1>
                <form className="d-flex flex-column px-5">
                    <div className="form-floating">
                        <label htmlFor="firstName">Nombre: </label>
                        <input type="text" id="firstName" className="form-control" onBlur={data => handlerChangeName(data)}/>
                    </div>
                    <div className="form-floating my-3">
                        <label htmlFor="lastName">Apellido: </label>
                        <input type="text" id="lastName" className="form-control" onBlur={data => handlerChangeName(data)}/>
                    </div>
                    <div className="form-floating my-3">
                        <label htmlFor="id">Número Documento: </label>
                        <input type="text" id="id" className="form-control"/>
                    </div>
                    <div className="form-floating my-3">
                        <label htmlFor="user">Usuario: </label>
                        <input type="text" id="user" className="form-control"/>
                    </div>
                    <div className="form-floating my-3">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" className="form-control"/>
                    </div>
                    <div className="form-floating my-3">
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" id="password" className="form-control"/>
                    </div>
                    <div className="form-floating my-3">
                        <label htmlFor="password2">Repeti tu contraseña: </label>
                        <input type="password" id="password2" className="form-control"/>
                    </div>
                    <input type="hidden" name="submitted" value={"login"} />
                    <button className="btn btn-success m-3 p-2 rounded-3 shadow" type="submit">Ingresar</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Register;