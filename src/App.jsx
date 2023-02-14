import { useState } from "react";
import { Brand, Navbar } from "./components";
import "./App.css";
import { Header } from "./containers";
function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
        </div>
    );
}

export default App;
