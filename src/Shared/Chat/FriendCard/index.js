import styled from "styled-components";

const Container = styled.div`
    width: 2rem;
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0;
    border-radius: 5px;
    padding: 10px 30px 0 30px;
    border: 1px solid;
    border-image: linear-gradient(180deg, #C8FDCB 0%, rgba(0, 0, 0, 0) 80%);
    border-image-slice: 1;
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