import React from "react";
import { useState } from 'react';

const Projects = () => {
    const [repos, setRepos] = useState([])
    fetch('https://api.github.com/users/jamesthomasbester/repos')
    .then(response => response.json())
    .then(result => { result.forEach(item => setRepos.push(item))})
    console.log(repos)
    return (
        <div class="container d-flex flex-wrap justofy-content-center">
            {repos.map( items => <h1>{items}</h1>)}
        </div>
        )
}

export default Projects;