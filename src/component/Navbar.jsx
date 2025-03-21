import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        // <nav className="navbar" style={{ padding: "10px", background: "#333", color: "white" }}>

        //     <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        //         <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        //         <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
        //         <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
        //     </ul>
        // </nav>

        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top p-3 shadow">
            <div class="container">
                <span class="navbar-brand order-1 fs-1 logo" href="../Home">
                    <img src="../src/assets/logo-Curigen (1).webp" alt="" />
                </span>
                <div class="order-5 d-flex justify-content-center align-content-center">
                    <div class="me-4 mt-1 order-2 order-lg-3 d-lg-none ">
                        <button class="header-btn border border-0 rounded-5 text-light">Make An Appointment</button>
                    </div>
                    <button class="navbar-toggler order-3 order-lg-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>


                <div class="collapse navbar-collapse ms-auto order-2" id="navbarNav">
                    <ul class="navbar-nav ms-auto gap-2 nav-ul">

                        <li class="nav-item">
                            <a class="nav-link active" href="../Product">Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../Services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gallary</a>
                        </li>


                        <div class="dropdown nav-item">
                            <a class="btn drop-btn nav-link nav-dropdown dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">
                                Company Profile
                            </a>
                            <ul class="dropdown-menu pe-4 ps-2 py-4">

                                <li><span class="dropdown-item" href="">Dropdown - 1</span></li>
                                <li><a class="dropdown-item pt-2" href="">Dropdown - 2</a></li>
                                <li><a class="dropdown-item pt-2" href="">Dropdown - 3</a></li>
                                <li><a class="dropdown-item pt-2" href="">Dropdown - 4</a></li>
                            </ul>
                        </div>
                        <div class="dropdown nav-item">
                            <a class="btn drop-btn nav-link nav-dropdown dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">
                                Visual Aids
                            </a>
                            <ul class="dropdown-menu pe-4 ps-2 py-4">

                                <li><span class="dropdown-item" href="">Dropdown - 1</span></li>
                                <div class="dropend">
                                    <li><a class="dropdown-item" href=""></a></li>
                                    <a class="btn text-dark dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                                        Deep Dropdown
                                    </a>
                                    <ul class="dropdown-menu ms-4">
                                        <li><a class="dropdown-item" href="#">Dropdown - 1</a></li>
                                        <li><a class="dropdown-item" href="#">Dropdown - 2</a></li>
                                        <li><a class="dropdown-item" href="#">Dropdown - 3</a></li>
                                    </ul>
                                </div>

                                <li><a class="dropdown-item pt-2" href="">Dropdown - 2</a></li>
                                <li><a class="dropdown-item pt-2" href="">Dropdown - 3</a></li>
                                <li><a class="dropdown-item pt-2" href="">Dropdown - 4</a></li>
                            </ul>
                        </div>
                        <div class="dropdown nav-item">
                            <a class="btn drop-btn nav-link nav-dropdown dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">
                                Divisons
                            </a>
                            <ul class="dropdown-menu pe-4 ps-2 py-4">

                                <li><span class="dropdown-item" href="">Dropdown - 1</span></li>
                                <div class="dropend">
                                    <li><a class="dropdown-item" href=""></a></li>
                                    <a class="btn text-dark dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                                        Deep Dropdown
                                    </a>
                                    <ul class="dropdown-menu ms-4">
                                        <li><a class="dropdown-item" href="#">Dropdown - 1</a></li>
                                        <li><a class="dropdown-item" href="#">Dropdown - 2</a></li>
                                        <li><a class="dropdown-item" href="#">Dropdown - 3</a></li>
                                    </ul>
                                </div>

                                <li><a class="dropdown-item pt-2" href="">Dropdown - 2</a></li>
                                <li><a class="dropdown-item pt-2" href="">Dropdown - 3</a></li>
                                <li><a class="dropdown-item pt-2" href="">Dropdown - 4</a></li>
                            </ul>
                        </div>


                        <li class="nav-item">
                            <a class="nav-link" href="../Contact">Contact</a>
                        </li>
                    </ul>
                    <div class="ms-3 order-2 order-lg-3 ">
                        <button class="header-btn border border-0 rounded-1 text-light rounded-5">Make An Appointment</button>
                    </div>
                </div>

            </div>
        </nav>

    );
};
export default Navbar;