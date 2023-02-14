import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";
const Header = () => {
    return (
        <header className="header section__padding">
            <div className="header__content">
                <h1 className="gradient__text">
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <div className="header__input">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <button type="button">Get Started</button>
                </div>

                <div className="header__people">
                    <img src={people} alt="people icon" />
                    <p>
                        1,600 people requested access a visit in last 24 hours
                    </p>
                </div>
            </div>

            <div className="header__img">
                <img src={ai} alt="ai" />
            </div>
        </header>
    );
};

export default Header;
