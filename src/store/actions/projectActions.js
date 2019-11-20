export const createProject = (project)=> {
    return (dispatch, getState, { getFirestore})=> {
        //database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'abc',
            authorLastName: 'def',
            authorId: 12345,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })

    }
}
