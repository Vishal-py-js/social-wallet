import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { selectExplore, selectFollowers, selectHome, selectNFTs, selectProfile } from "../../Redux/HomeTab/Actions";
import Sidebar from "../../Shared/Sidebar";
import Explore from "./ExploreScreen";
import HomeScreen from "./HomeScreen";
import NFT from "./NFTScreen";
import Followers from "./FollowerScreen";
import UserProfile from "../UserProfile";


const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.09) 5.21%, rgba(185, 11, 122, 0.12) 97.96%);
    background: rgba(221, 164, 252, 1);

    // .sidebar{
    //     //flex:1;
    //     width: 7vw;
    //     display: none;
    //     @media (max-width: 768px) {
    //         width: 120px;
    //         flex:2;
    //     }
    // }
`

const Body = styled.div`
    //flex: 13;
    width: 95%;
    color: #fff;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    margin: 4rem 0 4rem 0;
    @media (max-width: 768px) {
        width: 120px;
        flex:9;
    }
`
const Tabs = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    padding: 0 0 0 3rem;
    color: #C8FDCB;
    color: rgba(13, 3, 51, 1);
    opacity: 0.7;
    h3{
        cursor:pointer;
        font-size: 21px;
        font-weight: 400;
    }
    .activate{
        color: rgba(144, 255, 153, 1);
        font-weight: 700;
        //font-size: 21px;
    }
`

const Home = () => {
    const [active, setActive] = useState("Home")

    const history = useHistory()
    const dispatch = useDispatch()
    const tabSelector = useSelector(state=>state.homeTab)

    const handleHome = () => {
        setActive("Home")  
        dispatch(selectHome()) 
    }

    const handleProfile = () => {
        setActive("Profile") 
        dispatch(selectProfile())
        //history.push("/profile")  
    }

    const handleNFTs = () => {
        setActive("NFTs")
        dispatch(selectNFTs())   
    }

    const handleFollowers = () => {
        setActive("Followers") 
        dispatch(selectFollowers())  
    }

    const handleExplore = () => {
        setActive("Explore")  
        dispatch(selectExplore()) 
    }

    console.log(window.location.href);
    return(
        <Container>
            <Body>
                <Tabs>
                    <h3 className={active==="Home"?"activate":""} onClick={handleHome}>Home</h3>
                    <h3 className={active==="Profile"?"activate":""} onClick={handleProfile}>Profile</h3>
                    <h3 className={active==="NFTs"?"activate":""} onClick={handleNFTs}>NFTs</h3>
                    <h3 className={active==="Followers"?"activate":""} onClick={handleFollowers}>Followers</h3>
                    <h3 className={active==="Explore"?"activate":""} onClick={handleExplore}>Explore</h3>
                </Tabs>

                {
                    tabSelector==="Home"?<HomeScreen />:
                    tabSelector==="Profile"?<UserProfile />:
                    tabSelector==="Explore"?<Explore />:
                    tabSelector==="NFTs"?<NFT />:
                    tabSelector==="Followers"?<Followers />:
                    ""
                }
            </Body>

            {/* <div className="sidebar">
                <Sidebar />
            </div> */}
            
        </Container>
    )
}

export default Home