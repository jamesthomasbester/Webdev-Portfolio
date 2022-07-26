import React from "react";
import { useEffect, useState } from "react";

const Projects = () => {
    const [repo, setRepo] = useState([])

    useEffect(() => {
        const repoData = async () => {
            await fetch('https://api.github.com/users/jamesthomasbester/repos')
            .then(response => response.json())
            .then(result => {
                setRepo(result)
            })
        }
        repoData()

    }, [])
    console.log(repo)
    return (
        <div>
            {repo.map(repo => (
                <div className="card mb-3">
                    <div className={repo.language}>
                        <h2>{repo.language}</h2>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3>{repo.name}</h3>
                            <h5>{repo.description}</h5>
                            <a href={repo.html_url} className="card-text">{repo.html_url}</a>
                            <div className="details"> 
                                <p className="card-text">last update: {repo.updated_at}</p>
                                <p classname="card-text">created: {repo.created_at}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        )
}

export default Projects;