import {SHARE_MODAL_ON, SHARE_MODAL_OFF} from "../Constants"


export const shareModalOn = () => async(dispatch) => {
    dispatch({ type: SHARE_MODAL_ON})
}

export const shareModalOff = () => async(dispatch) => {
    dispatch({ type: SHARE_MODAL_OFF})
}