import React from "react";
import "./brancd.css";
import google from "../../assets/google.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";
import dropbox from "../../assets/dropbox.png";
import atlassian from "../../assets/atlassian.png";
const Brand = () => {
    return (
        <section className="section__padding brand">
            <div>
                <img src={google} alt="google" />
            </div>

            <div>
                <img src={slack} alt="slack" />
            </div>

            <div>
                <img src={dropbox} alt="dropbox" />
            </div>

            <div>
                <img src={shopify} alt="shopify" />
            </div>

            <div>
                <img src={atlassian} alt="atlassian" />
            </div>
        </section>
    );
};

export default Brand;
