import {SHOW_SUGGESTIONS, HIDE_SUGGESTIONS} from "../Constants"


export const showSuggestions = () => async(dispatch) => {
    dispatch({ type: SHOW_SUGGESTIONS})
}

export const hideSuggestions = () => async(dispatch) => {
    dispatch({type: HIDE_SUGGESTIONS})
}