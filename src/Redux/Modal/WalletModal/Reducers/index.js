import { WALLET_MODAL_ON, WALLET_MODAL_OFF } from "../Constants";


export const walletModalReducer = (state=false, action) => {
    switch(action.type){
        case WALLET_MODAL_ON:
            return true

        case WALLET_MODAL_OFF:
            return false

        default: return state
    }
}