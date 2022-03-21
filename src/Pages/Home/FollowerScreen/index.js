import { useState } from "react";
import styled from "styled-components";
import FollowersTab from "./FollowersTab";
import FollowingTab from "./FollowingTab";

const Container = styled.div`
    display: flex;
    //flex-direction: column;
    //align-items: center;
    justify-content: space-around;
    padding-right: 3rem;
    //gap: 3rem;
    hr{
        width: 1px;
    }
    .cls{
        display: flex;
        flex-direction: column;
        gap: 4rem;
        max-width: 40vw;
        //align-self: center;
        // display: flex;
        // flex-direction: column;
    }
    .divider{
        background: green;
        width: 2px;
        //height: 90vh;
    }
    .line{
        hr{
            //width: 90vw;
        }
    }
    .activate{
        background: rgba(255, 158, 205, 0.15);
        border: 2px solid rgba(255, 158, 205, 0.3);
    }
`

const ToggleContainer = styled.div`
    display: flex;
    //padding: 0 10rem;
    //align-self: center;
    //align-items: center;
    justify-content: space-around;
    //gap: 4rem;
    .activate{
        background: rgba(255, 158, 205, 0.15);
        border: 2px solid rgba(255, 158, 205, 0.3);
    }
    
`

const Button = styled.button`
    padding: 10px 20px;
    background: rgba(200, 253, 203, 0.15);
    color: rgba(200, 253, 203, 0.8);
    font-size: 17px;
    font-weight: 500;
    width: fit-content;
    cursor: pointer;
    align-self: center;
    border-radius: 20px;
    border: 2px solid rgba(200, 253, 203, 0.15);
`

const FollowersCont = styled.div`
    display: flex;
    justify-content: space-around;
`

const Followers = () => {

    const [active, setActive] = useState("Followers")

    const handleActive = (clickedComp) => {
        setActive(clickedComp)
        console.log(clickedComp);
    }

    return(
        <Container>
            {/* <div className="line"><hr /></div> */}
            {/* <ToggleContainer> */}
                <div className="cls">
                    <Button className={active==="Followers"?"activate":""} onClick={()=>handleActive("Followers")}>FOLLOWERS</Button>
                    <FollowersTab />
                </div>
                <div className="divider">
                </div>
                
                <div className="cls">
                    <Button className={active==="Following"?"activate":""} active={active} onClick={()=>handleActive("Following")}>FOLLOWING</Button>
                    <FollowingTab />
                </div>
            {/* </ToggleContainer> */}
            {/* {
                active==="Followers"?<FollowersTab />:<FollowingTab />
            } */}
            {/* <FollowersCont>
                
            </FollowersCont> */}
        </Container>
    )
}

export default Followers