import { useState } from "react";
import styled from "styled-components";

const dropdown = "assets/icons/dropdown.svg"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    .title{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
    }
    .friend-card-img{
        //border: 1px solid #C8FDCB;
        border: 1px solid;
        border-image: linear-gradient(180deg, #C8FDCB 0%, rgba(0, 0, 0, 0) 80%);
        border-image-slice: 1;
        padding: 12px 16px;
    }
    .selected-friend-card{
        border: 1.5px solid;
        border-image: linear-gradient(180deg, #C8FDCB 0%, rgba(0, 0, 0, 0) 100%);
        border-image-slice: 1;
        transition: 0.5s;
    }
    h4{
        font-weight: 400;
        font-size: 18px;
    }
    img{
        //align-self: flex-end;
        cursor: pointer;
    }
    .dropdown {
        position: absolute;
        right: 7rem;
        //top: 9rem;
        border: 1px solid;
        padding: 0 1rem;
        border-image: linear-gradient(107.63deg, #C8FDCB 64.34%, rgba(0, 0, 0, 0) 112.84%);
        border-image-slice: 1;
        background: linear-gradient(97.02deg, #1A382C 5.21%, #113025 97.96%);
        p{
            font-size: 17px;
            font-weight: 500;
            cursor: pointer;
            &:hover{
                color: #6CFF77;
            }
        }
      }
`

const FriendCardGroupChat = ({imgSrc, title}) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const x = document.getElementsByClassName("friend-card-img")
    for(let i=0; i<x.length;i++) {
        x[i].addEventListener("click", function(){
            const selectedOne = document.querySelector(".selected-friend-card")
            if(selectedOne){
                selectedOne.classList.remove("selected-friend-card")
            }
            this.classList.add("selected-friend-card")
        }, false)
    }

    const dropDownHandler = () => {
        setShowDropdown(!showDropdown)
    }

    return(
        <Container className="friend-card-home">
            <div className="title">
                <img className="friend-card-img" src={imgSrc} />
                <h4>{title}</h4>
            </div>
            <img onClick={dropDownHandler} src={dropdown} alt=""/>
            {
                showDropdown?
                    <div className="dropdown">
                        <p>Delete group</p>
                        <p>View group members</p>
                        <p>Add new member</p>
                    </div>:""
            }
        </Container>
    )
}

export default FriendCardGroupChat