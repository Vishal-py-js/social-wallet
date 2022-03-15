import {ADD_WALLET} from "../Constants"

export const walletsReducer = (state=[], action) => {
    switch(action.type){
        case ADD_WALLET:
            if (state.includes(action.payload)){
                alert("Metamask is already added")
                return state
            } else {
                state.push(action.payload)
            }
            return state
        default:
            return state
    }
}