let initialState = {
    loggedInPatients: null
}
const AuthReducer = (state= initialState, action) => {
    switch(action.type) {
        case "add_patient":
        return {...state, loggedInPatientss:action.payload}
        default : 
        return state
    }
}

export default AuthReducer;
