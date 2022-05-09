import {SHOW_FULLSCREEN_CHAT, HIDE_FULLSCREEN_CHAT} from "../Constants"


export const showFullScreenChat = () => async(dispatch) => {
    dispatch({ type: SHOW_FULLSCREEN_CHAT})
}

export const hideFullScreenChat = () => async(dispatch) => {
    dispatch({type: HIDE_FULLSCREEN_CHAT})
}