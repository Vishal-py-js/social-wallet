import React from "react";
import styled from "styled-components";
import Sidebar from "../../Shared/Sidebar";
import TransactionBanner from "./Banner";
import TransactionCard from "./TransactionCard";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    //padding: 3rem 0 4rem 0;
    background: linear-gradient(97.02deg, rgba(185, 11, 122, 0.12) 5.21%, rgba(108, 255, 119, 0.09) 97.96%);
`

const Body = styled.div`
    padding: 3rem 5rem 3rem 5rem;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    flex: 14;
    align-items: center;
    h1{
        color: #FB258B;
    }
`
const Selector = styled.div`
    //display: flex;
    align-self: flex-start;
    margin: 0 0 0 7rem;
    select{
        padding: 0 20px 0 20px;
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        color: #C8FDCB;
        height: 3rem;
        border-radius: 5px;
        font-size: 19px;
        text-align: center;
        option{
            color: #C8FDCB;
            background: black;
            border-radius: 5px;
        }
    }
`

const SideBar = styled.div`
display: flex;
    flex: 1;
    justify-content: flex-end;
`
const TransactionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .title{
        display: flex;
        gap: 14vw;
        color: gray;
        font-size: 18px;
        font-weight: 500;
        justify-content: space-between;
        padding: 0 2rem 0 2rem;
    }
    .list-items{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`

const Transaction = () => {
    return(
        <Container>
            <Body>
                <h1>LIQUIDITY</h1>
                <TransactionBanner />
                <Selector>
                    <select>
                        <option>TRANSACTION</option>
                        <option>TRANSACTION1</option>
                    </select>
                </Selector>
                <TransactionList>
                    <div className="title">
                        <span>SELLER</span>
                        <span>NFT</span>
                        <span>PRICE</span>
                        <span>BUYER</span>
                        <span>TIME</span>
                    </div>
                    <div className="list-items">
                        <TransactionCard />
                        <TransactionCard />
                        <TransactionCard />
                        <TransactionCard />
                        <TransactionCard />
                        <TransactionCard />
                        <TransactionCard />
                        <TransactionCard />
                    </div>
                </TransactionList>
            </Body>

            {/* <SideBar>
                <Sidebar />
            </SideBar> */}
        </Container>
    )
}

export default Transaction