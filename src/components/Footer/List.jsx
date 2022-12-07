import { NavLink } from "react-router-dom";

function List (props) {
    const output = props.arr.map(
        item => <li className="list-group-item border border-0 px-0 py-1 bg-transparent" key={item}>
                    <NavLink to={"/" + (item !== "Inicio" ? (props.group + "/" + item) : "")} className="text-decoration-none text-body">
                        {item}
                    </NavLink>
                </li>
    );

    return (
        <div className="col-6 col-lg-2 mb-3">
            <h5 className="">{props.title}</h5>
            <ul className="list-group list-group-flush">
                {output}
            </ul>
            {((props.group === "category") || (props.group === "brand")) && 
            <li className="list-group-item border border-0 px-0 py-1 bg-transparent">
                <NavLink to={"/" + props.group } className="text-decoration-none text-body">
                    Todas las {props.title}
                </NavLink>
            </li>
            }
        </div>
    )
}

export default List;