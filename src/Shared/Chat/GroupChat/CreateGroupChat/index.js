import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FriendCardHome from "../../../../Pages/Home/HomeScreen/FriendCardHome";


const friendIcon1 = '/assets/icons/signup1.svg'
const friendIcon2 = '/assets/icons/signup2.svg'
const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'
const back = "assets/icons/back.svg"
const selectImg = "assets/icons/select-image.svg"
const edit = "assets/icons/edit.svg"
const searchIcon = "assets/icons/magnifier.svg"
const remove = "assets/icons/remove.svg"


const Container = styled.div`
    //display: none;
    display: ${
        props=>props.chatDisplay?"flex":"none"
    };
    flex-direction: column;
    max-height: ${
        props=>props.createGroup?"90vh":"0vh"
    };
    transition: max-height 0.3s ease-in-out;
    position: absolute;
    //opacity: 0.5;
    gap: 2rem;
    width: 100%
    z-index: 222;
    height: 176vh;
    background: black;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.15) 5.21%, rgba(108, 255, 119, 0.06) 97.96%);
    width: ${
        props=>props.createGroup==false?"0px":"32vw"
    };
    padding: 0rem 0rem 0rem 2rem;
    //margin: 5rem 0rem 0 0;
    bottom: 0;
    hr{
        width: 95%;
        height: 0.2px;
        margin: 2rem 0rem 1rem 0rem;
        opacity: 0.5;
        // border: 0.1px solid;
        // border-image-source: linear-gradient(270deg, rgba(255, 247, 247, 0.38) 0%, #FFF7F7 51.04%, rgba(255, 247, 247, 0.62) 100%);
    }
    .create{
        color: rgba(108, 255, 119, 1);
        background: none;
        align-self: center;
        border: 2px solid rgba(108, 255, 119, 1);
        max-width: 50%;
        font-size: 21px;
        padding: 12px 1.5rem;
    }
`

const Header = styled.div`
    display: flex;
    //justify-content: center;
    gap: 3rem;
    align-items: center;
    visibility: ${
        props=>props.createGroup?"visible":"hidden"
    };
    opacity: ${
        props=>props.createGroup?"1":"0"
    };
    transition: visibility 0s, opacity 0.5s ease-out;
    span{
        color: #C8FDCB;
        font-size: 22px;
    }
    padding: 3rem 2rem 0 0;
    img{
        cursor: pointer;
    }
`

const GroupDetails = styled.div`
    display: flex;
    justify-content: space-around;
    .select-image{
        display: flex;
        flex-direction: column;
        gap: 8px;
        //max-width: 4rem;
        button{
            display:flex;
            justify-content: center;
            border: 2px solid;
            border-image-source: linear-gradient(180deg, #C8FDCB 99.99%, rgba(0, 0, 0, 0) 100%);
            border-image-slice: 1;
            background: none;
            width: 6rem;
            padding: 2rem 0rem;
            cursor: pointer;
        }
        small{
            color: rgba(255, 255, 255, 1);
            font-size: 13px;
            text-align: center;
            max-width: 6rem;
            opacity: 0.8;
        }
    }
    .select-name{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        padding-bottom: 30px;
        small{
            font-size: 13px;
            opacity: 0.8;
        }
        .inp{
            border-bottom: 2px solid #C8FDCB;
            img{
                cursor: pointer;
            }
            input{
                padding: 5px 0rem;
                width: 23rem;
                background: none;
                border: none;
                font-size: 20px;
                color: white;
                :focus{
                    outline: none;
                }
            }
        }
    }
`

const MembersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    span{
        color: #C8FDCB;
        font-size: 19px;
    }
`

const Search = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    gap: 2rem;
    //transition: 0.7s;
    border: 2px solid rgba(108, 255, 119, 1);
    padding: 1rem 1rem;
    background: black;
    align-self: center;
    
    input{
        background: none;
        border: none;
        font-size: 19px;
        color: #C8FDCB;
        :focus{
            outline: none;
        }
    }
    img{
        height: 30px;
    }
`

const Members = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 0 0;
    .card{
        display: flex;
        flex-direction: column;
        .close{
            position: relative;
            height: 17px;
            cursor: pointer;
            align-self: flex-end;
            top: 8px;
            left: 7px;
            background: rgba(200, 253, 203, 0.25);
        }
    }
`

const CreateGroup = ({createGroup, setCreateGroup}) => {

    const createGroupHandler = () => {
        setCreateGroup(false)
    }

    const chatDisplay = useSelector(state=>state.chat)

    return(
        <Container chatDisplay={chatDisplay} createGroup={createGroup}>
            <Header createGroup={createGroup}>
                <img onClick={createGroupHandler} src={back} alt=""/>
                <span>NEW GROUP</span>
            </Header>
            <GroupDetails>
                <div className="select-image">
                    <button><img src={selectImg} alt=""/></button>
                    <small>Add picture for your group</small>
                </div>
                <div className="select-name">                
                    <div className="inp">
                        <input  type="text"  placeholder="Type a name"></input>
                        <img src={edit} alt=""/>
                    </div>
                    <small>Give your group a unique name</small>
                </div>
            </GroupDetails>
            <hr />
            <MembersContainer>
                <span>Group members: 3</span>
                <Search>
                    <img src={searchIcon} alt=""/>
                    <input placeholder="Search the user to add" />
                </Search>
            </MembersContainer>
            <Members>
                <div className="card">
                    <img className="close" src={remove} alt=""remove/>
                    <FriendCardHome imgSrc={friendIcon1} title="User#01"/>
                </div>
                <div className="card">
                    <img className="close" src={remove} alt=""remove/>
                    <FriendCardHome imgSrc={friendIcon2} title="User#02"/>
                </div>
                <div className="card">
                    <img className="close" src={remove} alt=""remove/>
                    <FriendCardHome imgSrc={friendIcon3} title="User#03"/>
                </div>
                <div className="card">
                    <img className="close" src={remove} alt=""remove/>
                    <FriendCardHome imgSrc={friendIcon4} title="User#04"/>
                </div>
                <div className="card">
                    <img className="close" src={remove} alt="remove"/>
                    <FriendCardHome imgSrc={friendIcon5} title="User#05"/>
                </div>
            </Members>
            <button className="create">CREATE GROUP</button>
        </Container>
    )
}

export default CreateGroup
