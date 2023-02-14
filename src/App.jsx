import { useState } from "react";
import { Navbar } from "./components";
import "./App.css";
import { Header } from "./containers";
function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
        </div>
    );
}

export default App;
