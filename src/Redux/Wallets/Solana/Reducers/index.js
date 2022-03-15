import {SET_SOLANA_BALANCE, SET_SOLANA_ADDRESS} from "../Constants"


const initialState = {
    balance: "",
    address: ""
}

export const SolanabalanceReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_SOLANA_BALANCE:
            return {...state, balance:action.payload}
        case SET_SOLANA_ADDRESS:
            return {...state, address: action.payload}
        default: return state
    }
}