import { SHARE_MODAL_ON, SHARE_MODAL_OFF } from "../Constants";


export const shareModalReducer = (state=false, action) => {
    switch(action.type){
        case SHARE_MODAL_ON:
            return true

        case SHARE_MODAL_OFF:
            return false

        default: return state
    }
}