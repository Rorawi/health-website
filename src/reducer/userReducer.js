import {v4 as uuid} from "uuid"
let initialState = {
    details : [
        {
            name: 'Dela',
            email:"winifredasante15@gmail.com",
            subject:'CHECK-UP',
            phonenumber:"0547735578",
            message: "Lorem Lorem Lorem Lorem Lorem Lorem",
            id:uuid()
        },
        {
            name: 'Orison',
            email:"winifredasante15@gmail.com",
            subject:'CHECK-UP',
            phonenumber:"0547735578",
            message: "Lorem Lorem Lorem Lorem Lorem Lorem",
            id:uuid()
        },
        {
            name: 'Danny',
            email:"winifredasante15@gmail.com",
            subject:'CHECK-UP',
            phonenumber:"0547735578",
            message: "Lorem Lorem Lorem Lorem Lorem Lorem",
            id:uuid()
        },
        {
            name: 'Barbara',
            email:"winifredasante15@gmail.com",
            subject:'CHECK-UP',
            phonenumber:"0547735578",
            message: "Lorem Lorem Lorem Lorem Lorem Lorem",
            id:uuid()
        },
        {
            name: 'Kelly',
            email:"winifredasante15@gmail.com",
            subject:'CHECK-UP',
            phonenumber:"0547735578",
            message: "Lorem Lorem Lorem Lorem Lorem Lorem",
            id:uuid()
        },
        {
            name: 'Esther',
            email:"winifredasante15@gmail.com",
            subject:'CHECK-UP',
            phonenumber:"0547735578",
            message: "Lorem Lorem Lorem Lorem Lorem Lorem",
            id:uuid()
        },
        {
            name: 'ethel',
            email:"ethelaziamle14@gmail.com",
            subject:'CHECK-UP',
            phonenumber:"0500000000",
            message: "Lorem Oh Lorem",
            id:uuid()
        }
    ]
}


const UserReducer = (state= initialState,action) => {
        switch (action.type) {
            case 'ADD_USER':
                return{...state, details: action.payload}
            case 'DELETE_USER': 
            const filteredUser = state.details.filter(user => user.id !== action.payload)
                return{...state, user:filteredUser}
        
            default:
                break;
        }

    return state;
}

export default UserReducer;
