import { SHOW_SUGGESTIONS, HIDE_SUGGESTIONS } from "../Constants";


export const suggestionsReducer = (state=false, action) => {
    switch(action.type){
        case SHOW_SUGGESTIONS:
            return true
        
        case HIDE_SUGGESTIONS:
            return false

        default: return state
    }
}