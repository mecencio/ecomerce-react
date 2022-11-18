import React, { Component } from "react";
import FooterContent from "./FooterContent";
import PoweredBy from "./PoweredBy";

class Footer extends Component {
    render() {
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
}

export default Footer;