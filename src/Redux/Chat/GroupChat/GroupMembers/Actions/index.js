import {SHOW_MEMBERS, HIDE_MEMBERS} from "../Constants"


export const showMembers = () => async(dispatch) => {
    dispatch({ type: SHOW_MEMBERS})
}

export const hideMembers = () => async(dispatch) => {
    dispatch({type: HIDE_MEMBERS})
}