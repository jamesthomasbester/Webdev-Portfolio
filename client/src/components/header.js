import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                <ul className="nav me-auto">
                    <li className="nav-item"><Link to="/" class="nav-link link-dark px-2 active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="/about" class="nav-link link-dark px-2">About</Link></li>
                    <li className="nav-item"><Link to="/projects" class="nav-link link-dark px-2">Projects</Link></li>
                </ul>
                <ul className="nav">
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Login</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Sign up</a></li>
                </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom __web-inspector-hide-shortcut__">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                    <span className="fs-4">Jambotics</span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
                    </form>
                </div>
            </header>
        </div>
        )
}


export default Header;