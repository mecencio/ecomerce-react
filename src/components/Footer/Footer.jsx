import FooterContent from "./FooterContent";
import PoweredBy from "./PoweredBy";

function Footer ()  {
    return (
        <div className="bg-light">
            <div>
                <FooterContent />
            </div>
            <div>
                <PoweredBy />
            </div>
        </div>
    );
}

export default Footer;