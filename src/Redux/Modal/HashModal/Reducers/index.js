import { HASH_MODAL_ON, HASH_MODAL_OFF } from "../Constants";


export const hashModalReducer = (state=false, action) => {
    switch(action.type){
        case HASH_MODAL_ON:
            return true

        case HASH_MODAL_OFF:
            return false

        default: return state
    }
}