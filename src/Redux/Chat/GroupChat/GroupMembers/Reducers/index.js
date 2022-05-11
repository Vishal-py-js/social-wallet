import { SHOW_MEMBERS, HIDE_MEMBERS } from "../Constants";


export const groupMemberReducer = (state=false, action) => {
    switch(action.type){
        case SHOW_MEMBERS:
            return true
        
        case HIDE_MEMBERS:
            return false

        default: return state
    }
}