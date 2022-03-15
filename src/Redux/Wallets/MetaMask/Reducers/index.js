import {SET_BALANCE, SET_ADDRESS, SET_NFTs} from "../Constants"


const initialState = {
    balance: "",
    address: ""
}

const initialNftState = {
    nfts: [],
    address: ""
}

export const balanceReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_BALANCE:
            return {...state, balance:action.payload}
        case SET_ADDRESS:
            return {...state, address: action.payload}
        default: return state
    }
}

export const NFTsReducer = (state=initialNftState, action) => {
    switch(action.type){
        case SET_NFTs:
            return {...state, nfts: action.payload}
        case SET_ADDRESS:
            return {...state, address: action.payload}
        default:
            return state
    }
}