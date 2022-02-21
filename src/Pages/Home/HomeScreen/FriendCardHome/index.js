import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0;
    align-items: center;
    .friend-card-img{
        //border: 1px solid #C8FDCB;
        padding: 12px 16px;
        box-shadow: inset 0 6px 5px -6px rgba(108, 255, 119, 1),
              inset -5px 0 6px -5px rgba(108, 255, 119, 1), 
              inset 5px 0 6px -5px rgba(108, 255, 119, 1);
    }
    .selected-friend-card{
        box-shadow: inset 0 6px 0px -5px rgba(108, 255, 119, 1),
                    inset -4px 0 4px -2px rgba(108, 255, 119, 1), 
                    inset 5px 0 0px -3px rgba(108, 255, 119, 1);
        transition-duration: 0.3s;
        transform: scale(1.05);
    }
`

const FriendCardHome = ({imgSrc, title}) => {

    const x = document.getElementsByClassName("friend-card-img")
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
        <Container className="friend-card-home">
            <img className="friend-card-img" src={imgSrc} />
            <h4>{title}</h4>
        </Container>
    )
}

export default FriendCardHome