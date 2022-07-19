import React from "react";

const Card = (language, name, htmlURL, updatedAt, id) => {

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 text-center">
                <iframe title={name} src=""></iframe>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2>{name}</h2>
                        <h2>test</h2>
                        <a href={htmlURL} className="card-text">{htmlURL}</a>
                        <p className="card-text"><small class="text-muted">{updatedAt}</small></p>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Card;