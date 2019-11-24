import React from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Link, Redirect} from "react-router-dom";
import moment from "moment";
import 'moment/locale/fr';


const ProjectDetails = ({project, auth}) => {
    if(!auth.uid) return <Redirect to='/signin'/>
    if(project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-O">
                    <div className="card-content">
                        <button className='right white green-text'><Link to='/'>retour</Link></button>
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posté par {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </div>
        );
    }else {
        return (
            <div className="container center">
                <Redirect push to={'/'}/>
            </div>
        )
    }

};

const mapStateToProps = (state, ownProps)=> {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'projects'
    }])
)(ProjectDetails)
