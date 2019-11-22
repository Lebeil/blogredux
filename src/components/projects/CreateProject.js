import React, {Component} from 'react';
import {createProject} from "../../store/actions/projectActions";
import {connect} from 'react-redux'

class CreateProject extends Component {
    state = {
        title:'',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-draken-3">Créer un post</h5>
                    <div className="input-field">
                        <label htmlFor="title">Titre</label>
                        <input type="text" id='title' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Contenu</label>
                        <textarea className='materialize-textarea' id='content' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Créer</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default connect(null, {createProject})(CreateProject);
