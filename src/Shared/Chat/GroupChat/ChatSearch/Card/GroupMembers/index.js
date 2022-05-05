import styled from "styled-components";
import GroupMemberCard from "./GroupMemberCard";

const back = "assets/icons/back.svg"
const groupIcon = "assets/icons/group.svg"

const friendIcon1 = '/assets/icons/signup1.svg'
const friendIcon2 = '/assets/icons/signup2.svg'
const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    position: absolute;
    
    max-height: ${
        props=>props.members?"80vh":"0vh"
    };
    max-width: ${
        props=>props.members?"40vw":"0vw"
    };
    height: 75vh;
    width: 33.7vw;
    transition: max-width 0.5s ease-in-out;
    bottom: 0;
    right: 0;
    background: black;
    z-index: 2;
    span{
        color: #C8FDCB;
        font-size: 19px;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    //align-items: center;
    gap: 5rem;
    padding: 1rem 1.5rem;
    
    img{
        height: 20px;
        cursor: pointer;
    }
`

const Component1 = styled.div`
    display: flex;
    padding: 1.5rem 1.5rem;
    align-items: center;
    gap: 4rem;
    // justify-content: space-around;
    .group{
        border: 2px solid rgba(108, 255, 119, 1);
        padding: 0.4rem 0.5rem;
        
    }
    h5{
        color: rgba(200, 253, 203, 0.9);
        font-size: 18px;
        font-weight: 400;
    }
`

const Members = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    margin: 0 0 1rem 0;
    ::-webkit-scrollbar{
        background: black;
        width: 6px;
    }
    ::-webkit-scrollbar-thumb{
        background: #C8FDCB;
        height: 3rem;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow-y: scroll;
`

const GroupMembers = ({members, setshowMembers}) => {

    const handleMembers = () => {
        setshowMembers(false)
    }

    return(
        <Container members={members}>
            <Header>
                <img onClick={handleMembers} src={back} alt=""/>
                <span>You have <strong>10 members </strong>in <strong>NFT Avatars</strong></span>
            </Header>
            <Component1>
                <div className="group">
                    <img src={groupIcon} alt=""/>
                </div>
                <h5>Add new members to NFT Avatars</h5>
            </Component1>
            
            <Members>
                <GroupMemberCard imgSrc={friendIcon1} title="User#01" setshowMembers={setshowMembers}/>
                <GroupMemberCard imgSrc={friendIcon2} title="User#02" setshowMembers={setshowMembers}/>
                <GroupMemberCard imgSrc={friendIcon3} title="User#03" setshowMembers={setshowMembers}/>
                <GroupMemberCard imgSrc={friendIcon4} title="User#04" setshowMembers={setshowMembers}/>
                <GroupMemberCard imgSrc={friendIcon1} title="User#05" setshowMembers={setshowMembers}/>
                <GroupMemberCard imgSrc={friendIcon2} title="User#06" setshowMembers={setshowMembers}/>
                <GroupMemberCard imgSrc={friendIcon3} title="User#07" setshowMembers={setshowMembers}/>
                <GroupMemberCard imgSrc={friendIcon4} title="User#08" setshowMembers={setshowMembers}/>
                <GroupMemberCard imgSrc={friendIcon2} title="User#09" setshowMembers={setshowMembers}/>
                <GroupMemberCard imgSrc={friendIcon3} title="User#10" setshowMembers={setshowMembers}/>
            </Members>
        </Container>
    )
}

export default GroupMembers