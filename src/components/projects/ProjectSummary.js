import React from 'react';
import {deleteProject} from "../../store/actions/projectActions";
import {connect} from 'react-redux'

const ProjectSummary = ({project, deleteProject}) => {
    const handleClick = (e)=> {
        e.preventDefault()
        deleteProject(project.id)
    }

    return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <button className='btn-floating right btn-small red-text white' onClick={handleClick}>X</button>
                    <span className="card-title">{project.title}</span>
                        <p>Posté par Moi</p>
                        <p className='grey-text'>19 novembre</p>

                </div>
            </div>
    );
};

export default connect(null,{deleteProject})(ProjectSummary);
