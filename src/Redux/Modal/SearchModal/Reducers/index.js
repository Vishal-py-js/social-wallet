import { SEARCH_MODAL_ON, SEARCH_MODAL_OFF } from "../Constants";


export const searchModalReducer = (state=false, action) => {
    switch(action.type){
        case SEARCH_MODAL_ON:
            return true

        case SEARCH_MODAL_OFF:
            return false

        default: return state
    }
}