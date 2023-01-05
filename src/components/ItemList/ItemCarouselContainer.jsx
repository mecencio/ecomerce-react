import Item from "./Item";

function ItemCarouselContainer(props) {
    const prod1 = props.products.slice(0, 5);
    const prod2 = props.products.slice(5, 10);
    const prod3 = props.products.slice(10, 15);

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide my-5" data-bs-ride="carousel">
            <h1 className="text-center pb-3">{props.title}</h1>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="30000">
                <div className="d-flex flex-row gap-4 justify-content-center">
                    {prod1.map(item => <Item product={item} key={item.id} />)}
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="30000">
                <div className="d-flex flex-row gap-4 justify-content-center">
                    {prod2.map(item => <Item product={item} key={item.id} />)}
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="30000">
                <div className="d-flex flex-row gap-4 justify-content-center">
                    {prod3.map(item => <Item product={item} key={item.id} />)}
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default ItemCarouselContainer;