import styled from "styled-components";

const Container = styled.div`
    padding: 10px 30px 0 30px;
    box-shadow: inset 0 4px 5px -5px rgba(108, 255, 119, 1),
        inset -5px 0 4px -5px rgba(108, 255, 119, 1), 
        inset 5px 0 4px -5px rgba(108, 255, 119, 1);
    //box-shadow: -1px -1px 1px 0px rgba(108, 255, 119, 1);
    // .selected-friend-card{
    //     box-shadow: inset 0 8px 0px -5px rgba(108, 255, 119, 1),
    //                 inset -5px 0 5px -3px rgba(108, 255, 119, 1), 
    //                 inset 5px 0 5px -3px rgba(108, 255, 119, 1);
    //     transition-duration: 0.3s;
    //     transform: scale(1.03);
    // }
`

const FriendCard = ({imgSrc, title}) => {

    const x = document.getElementsByClassName("friend-card")
    // console.log(x);
    // console.log(x.length);
    for(let i=0; i<x.length;i++) {
        // console.log(x[i]);
        x[i].addEventListener("click", function(){
            const selectedOne = document.querySelector(".selected-friend-card")
            if(selectedOne){
                selectedOne.classList.remove("selected-friend-card")
            }
            this.classList.add("selected-friend-card")
        }, false)
    }

    return(
        <Container className="friend-card">
            <img src={imgSrc} alt="user"/>
            <p>{title}</p>
        </Container>
    )
}

export default FriendCard