import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            We are committed to providing the best services to our users. Stay connected with us for more updates.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#home" className="text-white text-decoration-none">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-white text-decoration-none">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white text-decoration-none">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 7890</p>
                        <div>
                            <a href="#facebook" className="text-white me-3">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#twitter" className="text-white me-3">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#linkedin" className="text-white">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p className="mb-0">&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;