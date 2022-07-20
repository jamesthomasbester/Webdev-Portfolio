import React from "react";
import { useEffect,useState } from "react";

const Card = (language, name, htmlURL, updatedAt, id) => {
    const [names, setNames] = useState()
    useEffect(() => {
        setNames(name)
    }, [name])
    return (
        <div className="card mb-3">
            <h1>{names}</h1>
        </div>
        )
}

export default Card;