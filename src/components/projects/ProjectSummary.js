import React from 'react';
import {deleteProject} from "../../store/actions/projectActions";
import {connect} from 'react-redux'
import moment from "moment";
import 'moment/locale/fr';
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

const ProjectSummary = ({project, projects, deleteProject, auth}) => {

    const handleClick = (e) => {
        e.preventDefault()
        deleteProject(project.id)
    }


    if (auth.id === projects.id) {
        return
    }


    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                {auth.uid ? <button className='btn-floating right btn-small red-text white'
                                    onClick={handleClick}>X</button> : null}
                <span className="card-title">{project.title}</span>
                <p>Posté par {project.authorFirstName} {project.authorLastName}</p>
                <p className='grey-text'>{moment(project.createdAt.toDate().toString()).calendar()}</p>

            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects,
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ]),
    {deleteProject})(ProjectSummary);
