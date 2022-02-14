import {SHOW_CHAT, HIDE_CHAT} from "../Constants"


export const showChat = () => async(dispatch) => {
    dispatch({ type: SHOW_CHAT})
}

export const hideChat = () => async(dispatch) => {
    dispatch({type: HIDE_CHAT})
}