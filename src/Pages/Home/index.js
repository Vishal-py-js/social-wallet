import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { selectExplore, selectFollowers, selectHome, selectNFTs, selectProfile } from "../../Redux/HomeTab/Actions";
import Sidebar from "../../Shared/Sidebar";
import Explore from "./ExploreScreen";
import HomeScreen from "./HomeScreen";
import NFT from "./NFTScreen";


const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100vw;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.09) 5.21%, rgba(185, 11, 122, 0.12) 97.96%);
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
    width: 93vw;
    color: #fff;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    margin: 4rem 0 4rem 2rem;
    @media (max-width: 768px) {
        width: 120px;
        flex:9;
    }
`
const Tabs = styled.div`
    display: flex;
    justify-content: space-around;
    color: #C8FDCB;
    opacity: 0.7;
    h3{
        cursor:pointer;
        font-size: 21px;
        font-weight: 300;
    }
    .activate{
        color: #FB258B;
        font-weight: 500;
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
        history.push("/profile")  
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
                    tabSelector==="Explore"?<Explore />:
                    tabSelector==="NFTs"?<NFT />:""
                }
            </Body>

            {/* <div className="sidebar">
                <Sidebar />
            </div> */}
            
        </Container>
    )
}

export default Home