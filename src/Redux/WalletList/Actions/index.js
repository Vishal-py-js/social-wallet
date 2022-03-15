import {ADD_WALLET} from "../Constants"

export const addWallet = (walletN) => async(dispatch) => {
    console.log(walletN);
    dispatch({ type: ADD_WALLET, payload:walletN})
}
