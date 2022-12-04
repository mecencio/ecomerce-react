function List (props) {
    const output = props.categorias.map(
        item => <li className="list-group-item border border-0 px-0 py-1 bg-transparent" key={item.id}>
                    <a className="text-decoration-none text-body" href={item.link}>
                        {item.nombre}
                    </a>
                </li>
    );

    return (
        <div className="col-6 col-lg-2 mb-3">
        <h5 className="">{props.titulo}</h5>
        <ul className="list-group list-group-flush">
            {output}
        </ul>
    </div>
    )
}

export default List;