import { useState } from "react";
import { Brand, Navbar } from "./components";
import "./App.css";
import { Header, WhatGPT3, Features, Possibility } from "./containers";
function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
        </div>
    );
}

export default App;
