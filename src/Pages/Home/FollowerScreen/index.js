import { useState } from "react";
import styled from "styled-components";
import FollowersTab from "./FollowersTab";
import FollowingTab from "./FollowingTab";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    hr{
        width: 90%;
        opacity: 0.3;
    }
`

const ToggleContainer = styled.div`
    display: flex;
    gap: 4rem;
    .activate{
        background: rgba(255, 158, 205, 0.15);
        border: 2px solid rgba(255, 158, 205, 0.3);
    }
    div{
        width: 3px;
        background: #6CFF77;
    }
`

const Button = styled.button`
    padding: 10px 20px;
    background: rgba(200, 253, 203, 0.15);
    color: rgba(200, 253, 203, 0.8);
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 20px;
    border: 2px solid rgba(200, 253, 203, 0.15);
`

const Followers = () => {

    const [active, setActive] = useState("Followers")

    const handleActive = (clickedComp) => {
        setActive(clickedComp)
        console.log(clickedComp);
    }

    return(
        <Container>
            <ToggleContainer>
                <Button className={active==="Followers"?"activate":""} onClick={()=>handleActive("Followers")}>FOLLOWERS</Button>
                <div></div>
                <Button className={active==="Following"?"activate":""} active={active} onClick={()=>handleActive("Following")}>FOLLOWING</Button>
            </ToggleContainer>
            <hr/>
            {
                active==="Followers"?<FollowersTab />:<FollowingTab />
            }
        </Container>
    )
}

export default Followers