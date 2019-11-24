import React from 'react';
import {deleteProject} from "../../store/actions/projectActions";
import {connect} from 'react-redux'
import moment from "moment";
import 'moment/locale/fr';

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
                        <p>Posté par {project.authorFirstName} {project.authorLastName}</p>
                        <p className='grey-text'>{moment(project.createdAt.toDate().toString()).calendar()}</p>

                </div>
            </div>
    );
};

export default connect(null,{deleteProject})(ProjectSummary);
