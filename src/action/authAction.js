export const loggedInPatient = (user) => {
    return{
        type:"add_patient",
        payload: user
    }
} 