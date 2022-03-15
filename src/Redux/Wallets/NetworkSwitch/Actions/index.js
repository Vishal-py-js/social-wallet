import {SELECT_ETH, SELECT_POLYGON, SELECT_BSC} from "../Constants"

export const setETH = () => async(dispatch) => {
    dispatch({type: SELECT_ETH})
}

export const setPoly = () => async(dispatch) => {
    dispatch({type: SELECT_POLYGON})
}

export const setBSC = () => async(dispatch) => {
    dispatch({type: SELECT_BSC})
}
