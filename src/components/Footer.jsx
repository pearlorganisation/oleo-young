import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
        <div className="container-fluid footer-container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-md-3">
                       <ul className="footer-list">
                           <li>
                               <h6 className="footer-list-heading">About</h6>
                           </li>
                           <li className="footer-link-list">
                               <Link to="/" className="footer-link">
                                   About Sephora
                               </Link>
                           </li>
                           <li className="footer-link-list">
                               <Link to="/" className="footer-link">
                                   About Oleo Young
                               </Link>
                           </li>
                           <li className="footer-link-list">
                               <Link to="/" className="footer-link">
                                   Student Discounts
                               </Link>
                           </li>
                           <li className="footer-link-list">
                               <Link to="/" className="footer-link">
                                   Terms of Use
                               </Link>
                           </li>
                       </ul>
                        </div>
                        <div className="col-md-3">
                        <ul className="footer-list">
                           <li>
                               <h6 className="footer-list-heading">Customer Care</h6>
                           </li>
                           <li className="footer-link-list">
                               <Link to="/" className="footer-link">
                                   Order Enquiry
                               </Link>
                           </li>
                           <li className="footer-link-list">
                               <Link to="/" className="footer-link">
                                   FAQ
                               </Link>
                           </li>
                           <li className="footer-link-list">
                               <Link to="/" className="footer-link">
                                   Book Beauty Services
                               </Link>
                           </li>
                           <li className="footer-link-list">
                               <Link to="/" className="footer-link">
                                   Discover Store Event
                               </Link>
                           </li>
                           <li className="footer-link-list">
                               <Link to="/" className="footer-link">
                                   Return & Refund Policy
                               </Link>
                           </li>
                       </ul>
                            </div>
                            <div className="col-md-3">
                            <h2 className="footer-logo"> OLEO YOUNG</h2>
                            </div>
                            <div className="col-md-3">
                            <h6 className="footer-list-heading">Connect With Us</h6>
                            <div className="footer-icons-div">
                                    <Link className="footer-icons" to="/">
                                    <i className="ri-instagram-fill"></i>
                                    </Link>
                                    <Link className="footer-icons" to="/">
                                    <i className="ri-facebook-circle-fill"></i>
                                    </Link>
                                    <Link className="footer-icons" to="/">
                                    <i className="ri-pinterest-fill"></i>
                                    </Link>
                                    <Link className="footer-icons" to="/">
                                    <i className="ri-youtube-fill"></i>
                                    </Link>
                                    <Link className="footer-icons" to="/">
                                    <i className="ri-snapchat-fill"></i>
                                    </Link>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}