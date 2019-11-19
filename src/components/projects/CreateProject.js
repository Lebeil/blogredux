import React, {Component} from 'react';

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
        console.log(this.state)
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

export default CreateProject;
