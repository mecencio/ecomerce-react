import React, { Component } from "react";
import Slide from "./MainSlide"
import MainDisponibles from "./MainDisponibles";

class Main extends Component {
    render() {
        return (
            <div>
                <Slide></Slide>
                <MainDisponibles />
            </div>
        )
    }
}

export default Main;