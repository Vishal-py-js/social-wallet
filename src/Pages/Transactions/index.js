import React from "react";
import styled from "styled-components";
import Sidebar from "../../Shared/Sidebar";
import TransactionBanner from "./Banner";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    background: linear-gradient(97.02deg, rgba(185, 11, 122, 0.12) 5.21%, rgba(108, 255, 119, 0.09) 97.96%);
`

const Body = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    flex: 14;
    align-items: center;
`

const SideBar = styled.div`
display: flex;
    flex: 1;
    justify-content: flex-end;
`

const Transaction = () => {
    return(
        <Container>
            <Body>
                <h1>LIQUIDITY</h1>
                <TransactionBanner />
            </Body>

            <SideBar>
                <Sidebar />
            </SideBar>
        </Container>
    )
}

export default Transaction