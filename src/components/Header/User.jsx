import {NavLink} from 'react-router-dom'

function User () {
    return(
        <div className="my-4">
            <NavLink to="/login" className="text-decoration-none text-body px-3">Ingresar</NavLink>
            <NavLink to="/register" className="text-decoration-none text-body px-3">Creá tu cuenta</NavLink>
        </div>
    )
}

export default User;