import styled from "styled-components"
//import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import React from "react";

const Container = styled.div`
// display: flex;
// flex-direction: column;
    //color: white;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.9) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    #uncontrolled-tab-example-tab-Judges,
    #uncontrolled-tab-example-tab-Paticipants{ 
        font-weight: 600;
        font-size: 19px;
        line-height: 23px;
        border:none;
        margin-bottom : 10px;
        //color: #fff;  
    }
    .nav-tabs {
        border-bottom:none;
    }
    #uncontrolled-tab-example-tab-Judges.active,
    #uncontrolled-tab-example-tab-Paticipants.active{
        color: unset;
        background-color: unset ;
        
        border-color: #dee2e6 #dee2e6 #fff;
        background: -webkit-linear-gradient(104.33deg, #5B22FF -2.02%, #0075FF 83.92%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        border: none;   
        ::before{
            content: "";
            position: absolute;
            top: 100%;
            width: 100%;
            left: 0;
            height: 3px;
            border-radius: 2px;
            background:  linear-gradient(104.33deg, #5B22FF -2.02%, #0075FF 83.92%)
        }
    } 
   
`

const WalletTabs = () => {
    return(
        <Container>
            <Tabs defaultActiveKey="Judges" id="uncontrolled-tab-example" className="mt-3">
                <Tab eventKey="Judges" title="Judges">
                    <div>
                        <div>Tab 1</div>
                        <div>Tab 1</div>
                        <div>Tab 1</div>
                        <div>Tab 1</div>
                    </div>
                </Tab>
                <Tab eventKey="Paticipants" title="Paticipants">
                    <div className="d-flex align-items-start mt-4">
                        <div>Tab 2</div>
                        <div>Tab 2</div>
                        <div>Tab 2</div>
                        <div>Tab 2</div>
                    </div>
                </Tab> 
            </Tabs>
        </Container>
    )
}

export default WalletTabs