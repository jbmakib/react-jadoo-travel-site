import React from "react";

const Header = () => {
    return (
        <header className="sticky-top bg-white">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="images/logo.png" alt="" width="150px" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul
                            className="
                                navbar-nav
                                align-items-center
                                ms-auto
                                mb-2 mb-lg-0
                            "
                        >
                            <li className="nav-item ms-4">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/destinations"
                                >
                                    Destinations
                                </a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link active" href="/hotels">
                                    Hotels
                                </a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link active" href="/flights">
                                    Flights
                                </a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link active" href="/bookings">
                                    Bookings
                                </a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link active" href="/login">
                                    Login
                                </a>
                            </li>
                            <li className="nav-item ms-4">
                                <a
                                    className="
                                        nav-link
                                        border
                                        rounded-pill
                                        px-4
                                        border-dark border-2
                                        active
                                        hover-bg-dark
                                    "
                                    href="/sign-up"
                                >
                                    Sign up
                                </a>
                            </li>
                            <li className="nav-item ms-4 dropdown">
                                <a
                                    className="nav-link active dropdown-toggle"
                                    href="/signUp"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    EN
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <span className="dropdown-item">
                                            BN
                                        </span>
                                    </li>
                                    <li>
                                        <span className="dropdown-item">
                                            Select another
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
