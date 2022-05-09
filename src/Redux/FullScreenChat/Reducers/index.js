import { SHOW_FULLSCREEN_CHAT, HIDE_FULLSCREEN_CHAT } from "../Constants";


export const fullScreenchatReducer = (state=false, action) => {
    switch(action.type){
        case SHOW_FULLSCREEN_CHAT:
            return true
        
        case HIDE_FULLSCREEN_CHAT:
            return false

        default: return state
    }
}