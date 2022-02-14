import { SHOW_CHAT, HIDE_CHAT } from "../Constants";


export const chatReducer = (state=true, action) => {
    switch(action.type){
        case SHOW_CHAT:
            return true
        
        case HIDE_CHAT:
            return false

        default: return state
    }
}