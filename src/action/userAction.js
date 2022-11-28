export const addUser = (user)=> {
        return{
            type:'ADD_USER',
            paylaod: user
        }
}

export const deleteUser=(id)=> {
    return{
        type: 'DELETE_USER',
        paylaod: id
    }
}