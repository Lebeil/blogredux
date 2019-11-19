import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-O">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>skljdfoiajofioaf  fjioar mfajr rif maijfearimo vriaoevio arji raemo </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posté par Moi</div>
                    <div>10 novemnbre 2019</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
