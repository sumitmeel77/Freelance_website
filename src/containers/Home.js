import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <div className="Home">
            <div className="main_body">
                <div className="main box_center">
                    {/* <div className="header overflow-fix clear-fix layout-9010">
                        <div className="layout-9010-left">
                        </div>
                        <div className="layout-9010-right">
                        </div>
                    </div> */}
                    <div className="main_box">
                        <ul className="box_menu">
                            <a href="/#/about">
                                <li className="box-menu-element-about " style={{ display: "block", top: "10px", left: "10px", opacity: "1" }}>
                                    <span className="title" >About Us</span>
                                    <span className="subtitle"> a brief info about us</span>
                                </li>
                            </a>
                            <a href="/#/services">
                                <li className="box-menu-element-services" style={{ display: "block", top: "10px", left: "280px", opacity: "1" }}>

                                    <span className="title">Our services</span>
                                    <span className="subtitle"> what we do</span>

                                </li>
                            </a>
                            <a href="/#/process">
                                <li className="box-menu-element-process" style={{ display: "block", top: "10px", left: "550px", opacity: "1" }}>

                                    <span className="title">The Process</span>
                                    <span className="subtitle"> our approch</span>

                                </li>
                            </a>
                            <a href="/#/image">
                                <li className="box-menu-element-images" style={{ display: "block", top: "200px", left: "10px", opacity: "1" }}>

                                    <span className="title">Images</span>
                                    <span className="subtitle"> work showcase</span>

                                </li>
                            </a>
                            <a href="/#/videos">
                                <li className="box-menu-element-videos" style={{ display: "block", top: "200px", left: "280px", opacity: "1" }}>

                                    <span className="title">Videos</span>
                                    <span className="subtitle"> work showcase</span>

                                </li>
                            </a>
                            <a href="/#/clients">
                                <li className="box-menu-element-clients" style={{ display: "block", top: "200px", left: "550px", opacity: "1" }}>

                                    <span className="title">Our clients</span>
                                    <span className="subtitle"> we work for</span>

                                </li>
                            </a>
                            <a href="/#/testimonials">
                                <li className="box-menu-element-testimonials" style={{ display: "block", top: "390px", left: "10px", opacity: "1" }}>

                                    <span className="title">Testimonials</span>
                                    <span className="subtitle"> clients opinions</span>

                                </li>
                            </a>
                            <a href="/#/pricing">
                                <li className="box-menu-element-pricing" style={{ display: "block", top: "390px", left: "280px", opacity: "1" }}>

                                    <span className="title">Pricing</span>
                                    <span className="subtitle"> get the quota</span>

                                </li>
                            </a>
                            <a href="/#/contact">
                                <li className="box-menu-element-contact" style={{ display: "block", top: "390px", left: "550px", opacity: "1" }}>

                                    <span className="title">Contact us</span>
                                    <span className="subtitle"> drop us a line</span>

                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}