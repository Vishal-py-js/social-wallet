import {SET_BALANCE, SET_ADDRESS, SET_NFTs} from "../Constants"

export const setBalance = (balance) => async(dispatch) => {
    dispatch({type: SET_BALANCE, payload: balance})
    //console.log(balance);
}

export const setAddress = (address) => async(dispatch) => {
    dispatch({type: SET_ADDRESS, payload: address})
}

export const setNFTs = (NFTs) => async(dispatch) => {
    dispatch({type: SET_NFTs, payload: NFTs})
}