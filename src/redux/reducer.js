import { actions } from "./actionTypes"

// store example - 
const initial =  []

export const reducer = (state=initial, action) =>{

    switch (action.type) {
        case actions.ADD_MENTOR:
            
            return [...state, ...actions.payload.mentorList];

        default:
            
            return state;
    }

}