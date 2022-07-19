import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

const Projects = () => {
    const [repo, setRepo] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/jamesthomasbester/repos')
        .then(response => response.json())
        .then(result => setRepo(result))
    }, [])

    console.log(repo)
    return (
        <div>
            {repo.map(repo => (
                <div key={repo.id}>
                {repo.name}
                </div>
                // <Card key={repo.id} id={repo.id} language={repo.language} name={repo.name} htmlURL={repo.html_url} updatedAt={repo.updatedAt} />
            ))}
        </div>
        )
}

export default Projects;