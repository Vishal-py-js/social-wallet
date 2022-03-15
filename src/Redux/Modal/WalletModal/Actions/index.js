import {WALLET_MODAL_ON, WALLET_MODAL_OFF} from "../Constants"


export const walletModalOn = () => async(dispatch) => {
    dispatch({ type: WALLET_MODAL_ON})
}

export const walletModalOff = () => async(dispatch) => {
    dispatch({ type: WALLET_MODAL_OFF})
}