import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0;
    align-items: center;
    .friend-card-img{
        //border: 1px solid #C8FDCB;
        padding: 12px 16px;
        border: 1px solid;
        border-image: linear-gradient(180deg, #C8FDCB 0%, rgba(0, 0, 0, 0) 80%);
        border-image-slice: 1;
    }
    .selected-friend-card{
        border: 1.5px solid;
        border-image: linear-gradient(180deg, #C8FDCB 95%, rgba(0, 0, 0, 0) 100%);
        border-image-slice: 1;
        transition: 0.5s;
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