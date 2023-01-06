import {NavLink} from 'react-router-dom'

function User () {
    return(
        <div className="my-4">
            <NavLink to="/login" className="text-decoration-none text-body px-3">Ingresar</NavLink>
            <a className="text-decoration-none text-body px-3" href="/">Creá tu cuenta</a>
        </div>
    )
}

export default User;