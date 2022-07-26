import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <nav className="py-2 bg-light border-bottom">
            <div className="container d-flex flex-wrap">
                <ul className="nav me-auto">
                    <li className="nav-item"><Link to="/" class="nav-link link-dark px-2 active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="/about" class="nav-link link-dark px-2">About</Link></li>
                    <li className="nav-item"><Link to="/projects" class="nav-link link-dark px-2">Projects</Link></li>
                    <li className="nav-item"><Link to="/contact" class="nav-link link-dark px-2">Contact</Link></li>
                </ul>
                <ul className="nav">
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Login</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Sign up</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;