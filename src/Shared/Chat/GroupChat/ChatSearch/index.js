import { useState } from "react";
import styled from "styled-components";
import CardGroupChat from "./Card";
import GroupMembers from "./Card/GroupMembers";

const friendIcon1 = '/assets/icons/signup1.svg'
const friendIcon2 = '/assets/icons/signup2.svg'
const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: ${
        props=>props.chatSearch?"80vh":"0vh"
    };
    transition: max-height 0.5s ease-in-out;
    position: absolute;
    //opacity: 0.5;
    width: 100%
    z-index: 222;
    height: 176vh;
    background: black;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.15) 5.21%, rgba(108, 255, 119, 0.06) 97.96%);
    width: ${
        props=>props.chatSearch==false?"0px":"32vw"
    };
    padding: 0rem 0rem 0rem 2rem;
    //margin: 1rem 4rem 0 0;
    bottom: 0;
    hr{
        width: 95%;
        height: 0.2px;
        margin: 2rem 0rem 1rem 0rem;
        // border: 0.1px solid;
        // border-image-source: linear-gradient(270deg, rgba(255, 247, 247, 0.38) 0%, #FFF7F7 51.04%, rgba(255, 247, 247, 0.62) 100%);
    }
`

const Header = styled.div`
    display: flex;
    justify-content: center;

    align-items: center;
    visibility: ${
        props=>props.chatSearch?"visible":"hidden"
    };
    opacity: ${
        props=>props.chatSearch?"1":"0"
    };
    transition: visibility 0s, opacity 0.5s ease-out;
    span{
        color: #C8FDCB;
        font-size: 19px;
    }
    padding: 1rem 2rem 0 0;
    button{
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.15) 5.21%, rgba(108, 255, 119, 0.06) 97.96%);

        //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.05) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        color: #C8FDCB;
        padding: 8px 30px;
        font-size: 17px;
        font-weight: 600;
        border 1px solid #C8FDCB;
        border-radius: 20px;
    }
`

const Users = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    ::-webkit-scrollbar{
        background: black;
        width: 6px;
    }
    ::-webkit-scrollbar-thumb{
        background: #C8FDCB;
        height: 3rem;
    }
    margin: 2rem 2rem 2rem 0;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow-y: scroll;
`

const GroupChatSearch = ({chatSearch}) => {

    const [members, setshowMembers] = useState(false)

    return(
        <Container chatSearch={chatSearch}>
            <hr />
            <GroupMembers members={members} setshowMembers={setshowMembers}/>
            <Header chatSearch={chatSearch}>
                <span>You have <strong>10 groups</strong></span>
            </Header>
            <Users>
                <CardGroupChat imgSrc={friendIcon1} title="Ethereum collectors" setshowMembers={setshowMembers}/>
                <CardGroupChat imgSrc={friendIcon2} title="Only NFTs" setshowMembers={setshowMembers}/>
                <CardGroupChat imgSrc={friendIcon3} title="All NFT collections" setshowMembers={setshowMembers}/>
                <CardGroupChat imgSrc={friendIcon4} title="Bitcoin users" setshowMembers={setshowMembers}/>
                <CardGroupChat imgSrc={friendIcon1} title="New updates on NFTs" setshowMembers={setshowMembers}/>
                <CardGroupChat imgSrc={friendIcon2} title="NFT Avatars" setshowMembers={setshowMembers}/>
                <CardGroupChat imgSrc={friendIcon3} title="Ethereum collectors" setshowMembers={setshowMembers}/>
                <CardGroupChat imgSrc={friendIcon4} title="Only NFTs" setshowMembers={setshowMembers}/>
                <CardGroupChat imgSrc={friendIcon2} title="NFT Avatars" setshowMembers={setshowMembers}/>
                <CardGroupChat imgSrc={friendIcon3} title="All NFT collections" setshowMembers={setshowMembers}/>
            </Users>
        </Container>
    )
}

export default GroupChatSearch