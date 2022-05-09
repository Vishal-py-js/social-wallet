import { useSelector } from "react-redux";
import styled from "styled-components";
import FriendCardChat from "./Card";

const friendIcon1 = '/assets/icons/signup1.svg'
const friendIcon2 = '/assets/icons/signup2.svg'
const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: ${
        props=>props.chatSearch&&props.fullScreen?"75.2vh":
        props.chatSearch&&props.fullScreen==false?"80vh":"0vh"
    };
    transition: max-height 0.5s ease-in-out;
    position: absolute;
    //opacity: 0.5;
    //width: 100%
    //width: 40vh;
    z-index: 222;
    height: 176vh;
    background: black;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.15) 5.21%, rgba(108, 255, 119, 0.06) 97.96%);
    width: ${
        props=>props.chatSearch==false?"0px":"32vw"
    };
    
    padding: 1.5rem 0rem 0rem 2rem;
    //margin: 1rem 4rem 0 0;
    bottom: 0px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
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

const PrivateChatSearch = ({chatSearch}) => {
    const fullScreen = useSelector(state=>state.fullScreenChat)
    return(
        <Container fullScreen={fullScreen} chatSearch={chatSearch}>
            <Header chatSearch={chatSearch}>
                <span>You have <strong>10 chat members</strong></span>
                <button>INVITE FRIEND</button>
            </Header>
            <Users>
                <FriendCardChat imgSrc={friendIcon1} title="User#1"/>
                <FriendCardChat imgSrc={friendIcon2} title="User#2"/>
                <FriendCardChat imgSrc={friendIcon3} title="User#3"/>
                <FriendCardChat imgSrc={friendIcon4} title="User#4"/>
                <FriendCardChat imgSrc={friendIcon1} title="User#5"/>
                <FriendCardChat imgSrc={friendIcon2} title="User#6"/>
                <FriendCardChat imgSrc={friendIcon3} title="User#7"/>
                <FriendCardChat imgSrc={friendIcon4} title="User#8"/>
                <FriendCardChat imgSrc={friendIcon2} title="User#2"/>
                <FriendCardChat imgSrc={friendIcon3} title="User#3"/>
                <FriendCardChat imgSrc={friendIcon4} title="User#4"/>
            </Users>
        </Container>
    )
}

export default PrivateChatSearch