const initState = {
    projects: [
        {id:'1', title: 'Bonjour', content: 'bla bla bla'},
        {id:'2', title: 'Bonsoir', content: 'bli bla bla'},
        {id:'3', title: 'Au revoir', content: 'lol bla bla'},
    ]
}

const projectReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer
