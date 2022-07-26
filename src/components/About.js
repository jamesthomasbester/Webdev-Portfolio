import React from "react";
const About = () => {
    
    return (
        <div className="about justify-content-center">
            <iframe src="James's Resume.pdf"></iframe>
            <div className="">
            <div class="card">
                <div className="card-body">
                    <h5 className="card-title">Author Info</h5>
                    <p className="card-text">A Melbourne based IT professional. Currently in Monash University's Full Stack web development Bootcamp. Currently focusing on Javascript, HTML5/CSS as part of the bootcamp. However professionally, I mainly utilize Powershell.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="https://github.com/jamesthomasbester">GitHub</a></li>
                    <li className="list-group-item"><a href="https://stackoverflow.com/users/10942317/james-bester">Stack overflow</a></li>
                    <li className="list-group-item"><a href="https://twitter.com/jamesbester1">Twitter</a></li>
                </ul>
                <div className="card-body">
                    Other Social Links: <br></br>
                    <a href="https://www.linkedin.com/in/james-bester-49452a73/" className="card-link">LinkedIn</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                </div>
            </div>
        </div>
        )
}

export default About;