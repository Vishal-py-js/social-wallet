import styled from "styled-components"
//import 'bootstrap/dist/css/bootstrap.css';
// import Tab from 'react-bootstrap/Tab'
// import Tabs from 'react-bootstrap/Tabs'
import React, { useState } from "react";
import Assets from "./Assets";
import Activity from "./Activity";

const Container = styled.div`
    
   
`

const Tabs = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
    color: #fff;
    div{
        width: 50%;
        display: flex;
        font-size: 18px;
        line-height: 0;
        //font-weight: 400;
        flex-direction: column;
        align-items: center;
        hr{
            width: 100%;
        }
        h4{
            cursor: pointer;
            color: unset;
        }
    }
    .selected{
        color: #6CFF77;
        font-weight: 600;
        hr{
            border-top: 3px solid #6CFF77;
            opacity: 1;
        }
    }
`

const WalletTabs = () => {

    const [active, setActive] = useState("Assets")

    const handleAssets = () => {
        setActive("Assets")
    }

    const handleActivity = () => {
        setActive("Activity")
    }

    return(
        <Container>
            <Tabs>
                <div className={active==="Assets"?"selected":""} onClick={handleAssets} >
                    <h4>ASSETS</h4>
                    <hr />
                </div>
                <div  className={active==="Activity"?"selected":""} onClick={handleActivity}>
                    <h4>ACTIVITY</h4>
                    <hr />
                </div>
            </Tabs>
            {
                    active==="Assets"?<Assets />:<Activity />
                }
        </Container>
    )
}

export default WalletTabs