import { SELECT_HOME, SELECT_PROFILE, SELECT_NFTs, SELECT_FOLLOWERS, SELECT_EXPLORE } from "../Constants"


export const homeTabreducer = (state="Home", action) => {
    switch(action.type){
        case SELECT_HOME:
            return "Home"
        case SELECT_PROFILE:
            return "Profile"
        case SELECT_NFTs:
            return "NFTs"
        case SELECT_FOLLOWERS:
            return "Followers"
        case SELECT_EXPLORE:
            return "Explore"

        default:
            return state
    }
}