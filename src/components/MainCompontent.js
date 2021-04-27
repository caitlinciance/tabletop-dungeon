import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";



class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Home />
            </>
        );
    }
}

export default Main