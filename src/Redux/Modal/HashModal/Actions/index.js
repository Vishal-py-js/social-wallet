import {HASH_MODAL_ON, HASH_MODAL_OFF} from "../Constants"


export const hashModalOn = () => async(dispatch) => {
    dispatch({ type: HASH_MODAL_ON})
}

export const hashModalOff = () => async(dispatch) => {
    dispatch({ type: HASH_MODAL_OFF})
}