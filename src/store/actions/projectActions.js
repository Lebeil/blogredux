export const createProject = (project)=> {
    return (dispatch, getState)=> {
        //database
        dispatch({type: 'CREATE_PROJECT', project})
    }
}
