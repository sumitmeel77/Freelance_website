import React from "react";
import "./contact.css";

export default function Contact() {
    return (
        <div className="Contact">
            <div className="main_body">
                <div className="main box_center">
                    <div className="main_box">
                        <ul className="box_menu_contact">
                            <li className="box-menu-element-contact " style={{ display: "block", top: "10px", left: "10px", opacity: "1" }}>
                                <a href="/#/contact">
                                    <span className="title" >Contact us</span>
                                    <span className="subtitle"> drop us a line</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="list_menu" style={{ height: "370px" }}>
                            <li>
                                <a href="/#/about" id="list-menu-element-about" className="selected">
                                    <span></span>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/#/services" id="list-menu-element-services" className="selected">
                                    <span></span>
                                    Our services
                                </a>
                            </li>
                            <li>
                                <a href="/#/process" id="list-menu-element-process" className="selected">
                                    <span></span>
                                    The Process
                                </a>
                            </li>
                            <li>
                                <a href="/#/image" id="list-menu-element-images" className="selected">
                                    <span></span>
                                    Images
                                </a>
                            </li>
                            <li>
                                <a href="/#/videos" id="list-menu-element-videos" className="selected">
                                    <span></span>
                                    Videos
                                </a>
                            </li>
                            <li>
                                <a href="/#/clients" id="list-menu-element-clients" className="selected">
                                    <span></span>
                                    Our clients
                                </a>
                            </li>
                            <li>
                                <a href="/#/testimonials" id="list-menu-element-testimonials" className="selected">
                                    <span></span>
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="/#/pricing" id="list-menu-element-pricing" className="selected">
                                    <span></span>
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="/#/contact" id="list-menu-element-contact" className="selected">
                                    <span></span>
                                    Contact us
                                </a>
                            </li>
                        </ul>
                        <div className="menu_window" style={{ display: "block ", overflow: "hidden", padding: "0px", width: " 550px " }}>
                            <div className="menu_page_contact" style={{ opacity: "1" }}>
                                <h1>Please give us a shout. We'd love to help.</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}