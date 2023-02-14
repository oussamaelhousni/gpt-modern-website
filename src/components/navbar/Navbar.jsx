import React from "react";
import { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => {
    return (
        <>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#wgpt3">What is GPT</a>
            </li>
            <li>
                <a href="#possibility">Open AI</a>
            </li>
            <li>
                <a href="#features">Case studies</a>
            </li>
            <li>
                <a href="#blog">Library</a>
            </li>
        </>
    );
};
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(true);
    return (
        <div className="navbar">
            <nav className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="navbar-links_container">
                    <Menu />
                </ul>
            </nav>
            <div className="navbar__sign">
                <a href="#sign">Sign in</a>
                <button type="button">Sign up</button>
            </div>

            <div className="navbar__menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        style={{ cursor: "pointer" }}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        style={{ cursor: "pointer" }}
                        onClick={() => setToggleMenu(true)}
                    />
                )}

                {toggleMenu && (
                    <>
                        <ul className="navbar__menu__links__container scale-up-center">
                            <Menu />
                            <div className="navbar__menu__sign">
                                <a>Sign in</a>
                                <button type="button">Sign up</button>
                            </div>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
