import React from "react";
import "./possibility.css";
import possibilityImg from "../../assets/possibility.png";
const Possibility = () => {
    return (
        <section className="possibility section__padding">
            <div className="possibility__img">
                <img src={possibilityImg} alt="possibility image" />
            </div>

            <div className="possibility__content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">
                    The possibilities are <br /> beyond your imagination
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </section>
    );
};

export default Possibility;
