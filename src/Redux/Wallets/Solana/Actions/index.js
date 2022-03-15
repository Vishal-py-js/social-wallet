import {SET_SOLANA_BALANCE, SET_SOLANA_ADDRESS} from "../Constants"

export const setSolanaBalance = (balance) => async(dispatch) => {
    dispatch({type: SET_SOLANA_BALANCE, payload: balance})
    //console.log(balance);
}

export const setSolanaAddress = (address) => async(dispatch) => {
    dispatch({type: SET_SOLANA_ADDRESS, payload: address})
}