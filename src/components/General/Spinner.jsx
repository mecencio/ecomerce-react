function Spinner() {
    return (
        <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text-success opacity-75" role="status" style={{width: "5rem", height: "5rem",}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;