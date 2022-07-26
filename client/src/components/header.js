import React from "react";

import Navigation from "./navigation";

const Header = () => {

    return (
        <div>
            <Navigation>

            </Navigation>
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