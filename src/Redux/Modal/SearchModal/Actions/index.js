import {SEARCH_MODAL_ON, SEARCH_MODAL_OFF} from "../Constants"


export const searchModalOn = () => async(dispatch) => {
    dispatch({ type: SEARCH_MODAL_ON})
}

export const searchModalOff = () => async(dispatch) => {
    dispatch({ type: SEARCH_MODAL_OFF})
}