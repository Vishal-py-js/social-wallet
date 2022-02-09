import { SELECT_HOME, SELECT_PROFILE, SELECT_NFTs, SELECT_FOLLOWERS, SELECT_EXPLORE } from "../Constants"


export const selectHome = () => async(dispatch) => {
    dispatch({ type: SELECT_HOME})
}

export const selectProfile = () => async(dispatch) => {
    dispatch({ type: SELECT_PROFILE})
}

export const selectNFTs = () => async(dispatch) => {
    dispatch({ type: SELECT_NFTs})
}

export const selectFollowers = () => async(dispatch) => {
    dispatch({ type: SELECT_FOLLOWERS})
}

export const selectExplore = () => async(dispatch) => {
    dispatch({ type: SELECT_EXPLORE})
}
