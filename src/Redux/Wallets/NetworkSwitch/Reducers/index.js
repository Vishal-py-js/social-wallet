import { SELECT_ETH, SELECT_POLYGON, SELECT_BSC } from "../Constants";

export const networkReducer = (state="eth", action) => {
    switch(action.type){
        case SELECT_ETH:
            return "eth"
        
        case SELECT_POLYGON:
            return "polygon"

        case SELECT_BSC:
            return "bsc"

        default: return state
    }
}