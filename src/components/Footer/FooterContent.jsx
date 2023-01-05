import List from "./List";
import { brands } from "../../utils/brands";
import { categories } from "../../utils/categories";

function FooterContent () {
    let array_links =["Inicio", "Contactenos"];

    return(
        <div className="container-fluid py-4 py-md-5 px-4 px-md-3">
            <div className="row">
                <div className="col-lg-2 mb-3 text-center">
                    <span className="py-4 ms-lg-3 ms-xxl-5 text-success fw-bold fst-italic font-monospace text-uppercase" href="#">G a m e </span>
                    <span className="py-4 text-nowrap text-success fw-bold fst-italic font-monospace text-uppercase" href="#"> O v e r</span>
                </div>
                <List title={"Links"} group={"link"} arr={array_links} />
                <List title={"Categorias"} group={"category"} arr={categories} />
                <List title={"Marcas"} group={"brand"} arr={brands} />
            </div>
        </div>
    );
}

export default FooterContent;